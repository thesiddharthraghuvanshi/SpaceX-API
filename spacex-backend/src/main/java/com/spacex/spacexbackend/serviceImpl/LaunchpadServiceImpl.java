package com.spacex.spacexbackend.serviceImpl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spacex.spacexbackend.model.Launchpad;
import com.spacex.spacexbackend.model.LaunchpadEto;
import com.spacex.spacexbackend.repository.LaunchpadRepository;
import com.spacex.spacexbackend.service.LaunchpadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
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
    public ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpadData() {
        List<Launchpad> launchpads = launchpadRepo.findAll();
        List<LaunchpadEto> launchpadEtos = new ArrayList<>();

        ObjectMapper objectMapper = new ObjectMapper();
        for(Launchpad launchpad : launchpads) {
            LaunchpadEto launchpadEto = objectMapper.convertValue(launchpad, LaunchpadEto.class);
            launchpadEtos.add(launchpadEto);
        }
        return new ResponseEntity<>(launchpadEtos, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<LaunchpadEto> fetchOneLaunchpadData(String id) {
        Optional<Launchpad> launchpad = launchpadRepo.findById(id);
        ObjectMapper objectMapper = new ObjectMapper();
        LaunchpadEto launchpadEto = objectMapper.convertValue(launchpad, LaunchpadEto.class);
        return new ResponseEntity<>(launchpadEto, HttpStatus.OK);
    }
}
