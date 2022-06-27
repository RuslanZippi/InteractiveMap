package main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductCart {
    String nameProduct;
    int count;
    String position;
    String description;
}
