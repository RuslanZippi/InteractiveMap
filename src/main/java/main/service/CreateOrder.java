package main.service;

import main.repository.ProductRep;
import org.springframework.stereotype.Service;

@Service
public class CreateOrder {

    final
    ProductRep productRep;

    public CreateOrder(ProductRep productRep) {
        this.productRep = productRep;
    }


}
