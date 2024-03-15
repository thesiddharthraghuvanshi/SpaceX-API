package com.spacex.spacexbackend.repository;

import com.spacex.spacexbackend.model.Launchpad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaunchpadRepository extends JpaRepository<Launchpad, String> {
}
