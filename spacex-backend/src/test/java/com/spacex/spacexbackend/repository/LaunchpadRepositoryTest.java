package com.spacex.spacexbackend.repository;

import com.spacex.spacexbackend.SpacexBackendApplication;
import com.spacex.spacexbackend.model.Launchpad;
import com.spacex.spacexbackend.repository.LaunchpadRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

@SpringBootTest(classes = SpacexBackendApplication.class)
@Transactional
@ActiveProfiles("test")
public class LaunchpadRepositoryTest {

    @Autowired
    private LaunchpadRepository launchpadRepository;

    @Test
    void testFindByNameContainingIgnoreCase() {
        String name = "Launchpad";
        PageRequest pageRequest = PageRequest.of(0, 10);
        Page<Launchpad> launchpads = launchpadRepository.findByNameContainingIgnoreCase(name, pageRequest);
        Assertions.assertNotNull(launchpads);
    }

    @Test
    void testFindByRegionContainingIgnoreCase() {
        String region = "Region";
        PageRequest pageRequest = PageRequest.of(0, 10);
        Page<Launchpad> launchpads = launchpadRepository.findByRegionContainingIgnoreCase(region, pageRequest);
        Assertions.assertNotNull(launchpads);
    }

    @Test
    void testFindByNameAndRegionContainingIgnoreCase() {
        String name = "Launchpad";
        String region = "Region";
        PageRequest pageRequest = PageRequest.of(0, 10);
        Page<Launchpad> launchpads = launchpadRepository.findByNameContainingIgnoreCaseAndRegionContainingIgnoreCase(name, region, pageRequest);
        Assertions.assertNotNull(launchpads);
    }
}

