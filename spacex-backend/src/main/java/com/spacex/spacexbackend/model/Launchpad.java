package com.spacex.spacexbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

enum Status {

      ACTIVE("active"),
      INACTIVE("inactive"),
      UNKNOWN("unknown"),
      RETIRED("retired"),
      LOST("lost"),
      UNDER_CONSTRUCTION("underConstruction");

    private final String value;

    Status(String value) {
        this.value = value;
    }

    private String getValue() {
        return this.value;
    }
}

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties
public class Launchpad {

//    @Id
//    private UUID id;

    @Id
    private String id;

    private String name;

//    @JsonDeserialize(using = FullNameDeserializer.class)
    @Column(name = "full_name")
    @JsonProperty("full_name")
    private  String fullName;

//    @Nonnull
//    private Status status;

    @Nonnull
    private String status;

    private  String locality;

    private String region;

    private String timezone;

    @Lob
    @Column(length = 16000)
    private String details;

    private Double latitude;

    private Double longitude;

//    @JsonDeserialize(using = GenericFieldDeserializer.class)
    @Column(name = "launch_attempts")
    @JsonProperty("launch_attempts")
    private Integer launchAttempts;

//    @JsonDeserialize(using = GenericFieldDeserializer.class)
    @Column(name = "launch_successes")
    @JsonProperty("launch_successes")
    private Integer launchSuccesses;

//    @JsonDeserialize(using = UUIDListDeserializer.class)
//    private List<UUID> launches;
//
//    @JsonDeserialize(using = UUIDListDeserializer.class)
//    private List<UUID> rockets;

    @Lob
    @Column(length = 21000)
    private List<String> launches;

    @Lob
    @Column(length = 21000)
    private List<String> rockets;
}
