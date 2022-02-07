package main.service;

import main.dto.request.ProductList;
import main.model.Product;
import main.repository.ProductRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class ProductListService {

    Logger logger = Logger.getLogger(ProductListService.class.getName());

    final
    ProductRep productRep;

    public ProductListService(ProductRep productRep) {
        this.productRep = productRep;
    }

    public List<ProductList> getAllProduct() {
        List<ProductList> productLists = new ArrayList<>();
        List<Product> products = productRep.findAll();
        for (int x = 0; x < products.size(); x++) {
            Product p = products.get(x);
            productLists.add(new ProductList(p.getName(), p.getId(), p.getCount(), p.getPosition()));
        }
        logger.info("productList size: " +productLists.size());
        return productLists;
    }
}
