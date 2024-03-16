package com.spacex.spacexbackend.repository;

import com.spacex.spacexbackend.model.Launchpad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LaunchpadRepository extends JpaRepository<Launchpad, String> {

    Page<Launchpad> findByNameContainingIgnoreCase(String name, Pageable page);

    Page<Launchpad> findByRegionContainingIgnoreCase(String region, Pageable page);

    Page<Launchpad> findByNameContainingIgnoreCaseAndRegionContainingIgnoreCase(String name, String region, Pageable page);
}
