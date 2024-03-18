package com.spacex.spacexbackend.config;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
class SecurityConfigTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testUnauthenticatedAccessToGetEndpoints() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/launchpads/fetchAll/1/10"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void testUnauthenticatedAccessToPostEndpoints() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/launchpads/updateAll"))
                .andExpect(MockMvcResultMatchers.status().isAccepted());
    }
}

