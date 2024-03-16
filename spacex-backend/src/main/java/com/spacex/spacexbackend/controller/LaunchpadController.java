package com.spacex.spacexbackend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.spacex.spacexbackend.model.LaunchpadEto;
import com.spacex.spacexbackend.service.LaunchpadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("launchpads")
public class LaunchpadController {

    @Autowired
    LaunchpadService launchpadService;

    @PostMapping("updateAll")
    public ResponseEntity<String> updateAllLaunchpads() throws JsonProcessingException {
        return launchpadService.updateAllLaunchpadData();
    }

    @GetMapping("fetchAll/{pageNumber}/{records}")
    public ResponseEntity<List<LaunchpadEto>> fetchAllLaunchpads(@PathVariable Integer pageNumber, @PathVariable Integer records) {
        return launchpadService.fetchAllLaunchpadData(pageNumber, records);
    }

    @GetMapping("fetch/{id}")
    public ResponseEntity<LaunchpadEto> fetchLaunchpad(@PathVariable String id) {
        return launchpadService.fetchOneLaunchpadData(id);
    }

    @GetMapping("fetchByFilter")
    public ResponseEntity<List<LaunchpadEto>> fetchFilteredLaunchpads(@RequestParam Map<String, String> filters) {
        return launchpadService.fetchFilteredLaunchpads(filters);
    }
}
