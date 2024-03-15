package com.spacex.spacexbackend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.spacex.spacexbackend.model.LaunchpadEto;
import com.spacex.spacexbackend.service.LaunchpadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("launchpads")
public class LaunchpadController {

    @Autowired
    LaunchpadService launchpadService;

    @PostMapping("updateAll")
    public ResponseEntity<String> updateAllLaunchpads() throws JsonProcessingException {
        return launchpadService.updateAllLaunchpadData();
    }

    @GetMapping("fetchAll")
    public ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpads() {
        return launchpadService.fetchAllLaunchpadData();
    }

    @GetMapping("fetch/{id}")
    public ResponseEntity<LaunchpadEto> fetchLaunchpad(@PathVariable String id){
        return launchpadService.fetchOneLaunchpadData(id);
    }
}
