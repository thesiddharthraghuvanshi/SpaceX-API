package com.spacex.spacexbackend.serviceImpl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spacex.spacexbackend.model.Launchpad;
import com.spacex.spacexbackend.model.eto.LaunchpadEto;
import com.spacex.spacexbackend.repository.LaunchpadRepository;
import com.spacex.spacexbackend.service.LaunchpadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class LaunchpadServiceImpl implements LaunchpadService {

    @Autowired
    LaunchpadRepository launchpadRepo;

    @Value("${spacex.api.endpoint}")
    private String spacexEndpoint;

    @Override
    public ResponseEntity<String> updateAllLaunchpadData() throws JsonProcessingException {
        String launchpadV4Uri = spacexEndpoint + "/launchpads";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(launchpadV4Uri, String.class);
        ObjectMapper objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        Launchpad[] launchpads = objectMapper.readValue(result, Launchpad[].class);
        if (launchpads != null && launchpads.length > 0) {
            launchpadRepo.deleteAll();
            launchpadRepo.saveAll(Arrays.asList(launchpads));
        }
        return new ResponseEntity<>("Launchpads updated Sucessfully", HttpStatus.ACCEPTED);
    }

    @Override
    public ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpadData(int pageNumber, int records) {
        Pageable page = PageRequest.of(pageNumber, records);
        ObjectMapper objectMapper = new ObjectMapper();
        List<LaunchpadEto> launchpadEtos = launchpadRepo.findAll(page)
                .getContent()
                .stream()
                .map(launchpad -> objectMapper.convertValue(launchpad, LaunchpadEto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(launchpadEtos);
    }

    @Override
    public ResponseEntity<LaunchpadEto> fetchOneLaunchpadData(String id) {
        Optional<Launchpad> launchpadOptional = launchpadRepo.findById(id);
        return launchpadOptional.map(launchpad -> ResponseEntity.ok(convertToLaunchpadEto(launchpad)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<List<LaunchpadEto>> fetchFilteredLaunchpads(Map<String, String> filters) {
        int pageNumber = Integer.parseInt(filters.getOrDefault("pageNumber", "0"));
        int records = Integer.parseInt(filters.getOrDefault("records", "5"));
        Pageable page = PageRequest.of(pageNumber, records);

        List<Launchpad> launchpads;

        if (filters.containsKey("name") && !filters.get("name").isEmpty() && filters.containsKey("region") && !filters.get("region").isEmpty()) {
            launchpads = launchpadRepo.findByNameContainingIgnoreCaseAndRegionContainingIgnoreCase(filters.get("name"), filters.get("region"), page).getContent();
        } else if (filters.containsKey("name") && !filters.get("name").isEmpty()) {
            launchpads = launchpadRepo.findByNameContainingIgnoreCase(filters.get("name"), page).getContent();
        } else if (filters.containsKey("region") && !filters.get("region").isEmpty()) {
            launchpads = launchpadRepo.findByRegionContainingIgnoreCase(filters.get("region"), page).getContent();
        } else {
            launchpads = launchpadRepo.findAll(page).getContent();
        }

        ObjectMapper objectMapper = new ObjectMapper();
        List<LaunchpadEto> launchpadEtos = launchpads.stream()
                .map(launchpad -> objectMapper.convertValue(launchpad, LaunchpadEto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(launchpadEtos);
    }

    private LaunchpadEto convertToLaunchpadEto(Launchpad launchpad) {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.convertValue(launchpad, LaunchpadEto.class);
    }

    @Scheduled(cron = "0 */5 * * * *")
    public void execute() throws JsonProcessingException {
        System.out.println("DB update by scheduler at : " + LocalDateTime.now());
        //updateAllLaunchpadData();
    }
}
