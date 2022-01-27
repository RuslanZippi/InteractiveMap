package main.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.swing.text.Position;

@Data
public class ProductSaveRequest {

    @JsonProperty("Product")
    private ProductRequest product;

    private boolean status;
}
