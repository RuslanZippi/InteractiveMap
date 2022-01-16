package main.service;

import main.dto.ProductResponse;
import main.model.Product;
import main.repository.ProductRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestService {
    @Autowired
    ProductRep productRep;

    public List<ProductResponse> getProductByPosition(String position) {
        List<ProductResponse> responseList = new ArrayList<>();

        List<Product> list = productRep.findByPosition(position);

        for (Product p : list) {
            responseList.add(new ProductResponse(p.getName(), p.getCount(), p.getId()));
        }
        return responseList;
    }

}
