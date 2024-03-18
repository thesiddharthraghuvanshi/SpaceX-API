package com.spacex.spacexbackend.serviceImpl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spacex.spacexbackend.SpacexBackendApplication;
import com.spacex.spacexbackend.model.Launchpad;
import com.spacex.spacexbackend.model.eto.LaunchpadEto;
import com.spacex.spacexbackend.repository.LaunchpadRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = SpacexBackendApplication.class)
@TestPropertySource(locations="classpath:application-test.properties")
@ActiveProfiles("test")
class LaunchpadServiceImplTest {

    @Mock
    private LaunchpadRepository launchpadRepository;

    @InjectMocks
    private LaunchpadServiceImpl launchpadService;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testFetchAllLaunchpadData_Success() {
        List<Launchpad> launchpads = Arrays.asList(new Launchpad("1", "Launchpad 1", "Full Name 1", "ACTIVE", "Locality 1", "Region 1", "Timezone 1", "Details 1", 1.0, 1.0, 1, 1, Arrays.asList("launch1"), Arrays.asList("rocket1")));
        Page<Launchpad> page = new PageImpl<>(launchpads);

        when(launchpadRepository.findAll(any(Pageable.class))).thenReturn(page);

        ResponseEntity<List<LaunchpadEto>> responseEntity = launchpadService.fetchAllLaunchpadData(0, 10);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(launchpads.size(), Objects.requireNonNull(responseEntity.getBody()).size());
    }


    @Test
    void testFetchOneLaunchpadData_Success() {
        Launchpad launchpad = new Launchpad("1", "Launchpad 1", "Full Name 1", "ACTIVE", "Locality 1", "Region 1", "Timezone 1", "Details 1", 1.0, 1.0, 1, 1, Arrays.asList("launch1"), Arrays.asList("rocket1"));

        when(launchpadRepository.findById("1")).thenReturn(Optional.of(launchpad));

        ResponseEntity<LaunchpadEto> responseEntity = launchpadService.fetchOneLaunchpadData("1");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
        assertEquals("Launchpad 1", responseEntity.getBody().getName());
    }

    @Test
    void testFetchOneLaunchpadData_NotFound() {
        when(launchpadRepository.findById(any())).thenReturn(Optional.empty());

        ResponseEntity<LaunchpadEto> responseEntity = launchpadService.fetchOneLaunchpadData("1");

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertNull(responseEntity.getBody());
    }

    @Test
    void testFetchFilteredLaunchpads_Success() {
        List<Launchpad> launchpads = Arrays.asList(new Launchpad("1", "Launchpad 1", "Full Name 1", "ACTIVE", "Locality 1", "Region 1", "Timezone 1", "Details 1", 1.0, 1.0, 1, 1, Arrays.asList("launch1"), Arrays.asList("rocket1")));
        Page<Launchpad> page = new PageImpl<>(launchpads);

        when(launchpadRepository.findByNameContainingIgnoreCaseAndRegionContainingIgnoreCase(anyString(), anyString(), any(Pageable.class)))
                .thenReturn(page);
        when(launchpadRepository.findByNameContainingIgnoreCase(anyString(), any(Pageable.class)))
                .thenReturn(page);
        when(launchpadRepository.findByRegionContainingIgnoreCase(anyString(), any(Pageable.class)))
                .thenReturn(page);
        when(launchpadRepository.findAll(any(Pageable.class)))
                .thenReturn(page);

        Map<String, String> filters = new HashMap<>();
        filters.put("name", "Launchpad");
        filters.put("region", "Region");

        ResponseEntity<List<LaunchpadEto>> responseEntity = launchpadService.fetchFilteredLaunchpads(filters);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(launchpads.size(), Objects.requireNonNull(responseEntity.getBody()).size());
    }

}


