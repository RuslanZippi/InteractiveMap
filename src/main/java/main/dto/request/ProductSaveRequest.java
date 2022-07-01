package main.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductSaveRequest {

    @JsonProperty("Product")
    private ProductRequest product;

    private boolean status;
}
