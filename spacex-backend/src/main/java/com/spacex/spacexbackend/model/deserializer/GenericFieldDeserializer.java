package com.spacex.spacexbackend.model.deserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import lombok.NoArgsConstructor;

import java.io.IOException;
import java.util.Map;

@NoArgsConstructor
public class GenericFieldDeserializer<T> extends JsonDeserializer<T> {

    private String fieldName;

    public GenericFieldDeserializer(String fieldName) {
        this.fieldName = fieldName;
    }

    @Override
    public T deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException, JsonProcessingException {
        Map<String, Object> map = jsonParser.readValueAs(Map.class);
        return (T) map.get(fieldName);
    }
}

