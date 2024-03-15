package com.spacex.spacexbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.spacex.spacexbackend.model.LaunchpadEto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface LaunchpadService {

    ResponseEntity<String> updateAllLaunchpadData() throws JsonProcessingException;

    ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpadData();

    ResponseEntity<LaunchpadEto> fetchOneLaunchpadData(String id);

}
