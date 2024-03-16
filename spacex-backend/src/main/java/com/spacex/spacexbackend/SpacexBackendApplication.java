package com.spacex.spacexbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SpacexBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpacexBackendApplication.class, args);
	}

}
