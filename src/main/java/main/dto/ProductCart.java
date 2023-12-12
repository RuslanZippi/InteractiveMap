package main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductCart {
    private String nameProduct;
    private int count;
    private String position;
    private String description;
}
