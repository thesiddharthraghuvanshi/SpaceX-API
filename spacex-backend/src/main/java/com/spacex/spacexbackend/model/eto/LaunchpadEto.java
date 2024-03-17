package com.spacex.spacexbackend.model.eto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("full_name")
    private String fullName;

    private String status;

    private String locality;

    private String region;

    private String timezone;

    private String details;

    private Double latitude;

    private Double longitude;

    @JsonProperty("launch_attempts")
    private Integer launchAttempts;

    @JsonProperty("launch_successes")
    private Integer launchSuccesses;

    private List<String> launches;

    private List<String> rockets;
}
