package com.spacex.spacexbackend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.spacex.spacexbackend.model.eto.LaunchpadEto;
import com.spacex.spacexbackend.service.LaunchpadService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class LaunchpadControllerTest {

    @Mock
    private LaunchpadService launchpadService;

    @InjectMocks
    private LaunchpadController launchpadController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testUpdateAllLaunchpads() throws JsonProcessingException {
        when(launchpadService.updateAllLaunchpadData()).thenReturn(new ResponseEntity<>("Success", HttpStatus.OK));
        ResponseEntity<String> response = launchpadController.updateAllLaunchpads();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Success", response.getBody());
    }

    @Test
    void testFetchAllLaunchpads() {
        List<LaunchpadEto> launchpads = Collections.singletonList(new LaunchpadEto());
        when(launchpadService.fetchAllLaunchpadData(1, 10)).thenReturn(new ResponseEntity<>(launchpads, HttpStatus.OK));
        ResponseEntity<List<LaunchpadEto>> response = launchpadController.fetchAllLaunchpads(1, 10);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(launchpads, response.getBody());
    }

    @Test
    void testFetchLaunchpad() {
        LaunchpadEto launchpadEto = new LaunchpadEto();
        String id = "123";
        when(launchpadService.fetchOneLaunchpadData(id)).thenReturn(new ResponseEntity<>(launchpadEto, HttpStatus.OK));
        ResponseEntity<LaunchpadEto> response = launchpadController.fetchLaunchpad(id);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(launchpadEto, response.getBody());
    }

    @Test
    void testFetchFilteredLaunchpads() {
        List<LaunchpadEto> launchpads = Collections.singletonList(new LaunchpadEto());
        Map<String, String> filters = new HashMap<>();
        filters.put("name", "testName");
        filters.put("region", "testRegion");
        when(launchpadService.fetchFilteredLaunchpads(filters)).thenReturn(new ResponseEntity<>(launchpads, HttpStatus.OK));
        ResponseEntity<List<LaunchpadEto>> response = launchpadController.fetchFilteredLaunchpads(filters);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(launchpads, response.getBody());
    }
}
