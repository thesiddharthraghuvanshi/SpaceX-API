package com.spacex.spacexbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.spacex.spacexbackend.model.LaunchpadEto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface LaunchpadService {

    ResponseEntity<String> updateAllLaunchpadData() throws JsonProcessingException;

    ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpadData(int pageNumber, int records);

    ResponseEntity<LaunchpadEto> fetchOneLaunchpadData(String id);

    ResponseEntity<List<LaunchpadEto>> fetchFilteredLaunchpads(Map<String, String> filters);
}
