package main.dto;

import lombok.Data;

@Data
public class ProductResponse {

    String name;
    int count;
    int id;

    public ProductResponse(String name, int count, int id) {
        this.name = name;
        this.count = count;
        this.id = id;
    }
}
