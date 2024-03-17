package com.spacex.spacexbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LaunchpadEto {

    private String id;

    private String name;

    private String fullName;

    private String status;

    private String locality;

    private String region;

    private String timezone;

    private Double latitude;

    private Double longitude;

    private Integer launchAttempts;

    private Integer launchSuccesses;

    private List<String> launches;

    private List<String> rockets;
}
