package main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductParseResponse {

    private String name;

    private String type;

    private double count;
}
