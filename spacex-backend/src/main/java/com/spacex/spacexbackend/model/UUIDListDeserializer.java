package com.spacex.spacexbackend.model;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class UUIDListDeserializer extends JsonDeserializer<List<UUID>> {

    @Override
    public List<UUID> deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        ObjectMapper mapper = (ObjectMapper) jsonParser.getCodec();
        List<String> uuidStrings = mapper.readValue(jsonParser, new TypeReference<List<String>>() {});
        List<UUID> uuids = new ArrayList<>();
        for (String uuidString : uuidStrings) {
            uuids.add(UUID.fromString(uuidString));
        }
        return uuids;
    }
}

