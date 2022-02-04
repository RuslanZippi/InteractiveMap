package main.service;

import main.dto.ResponseSaver;
import main.dto.request.ProductRequest;
import main.dto.request.ProductSaveRequest;
import main.model.Product;
import main.repository.ProductRep;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class SaverService {
    Logger logger = Logger.getLogger(SaverService.class.getName());

    final
    ProductRep productRep;

    public SaverService(ProductRep productRep) {
        this.productRep = productRep;
    }

    public List<ResponseSaver> saveData(List<ProductRequest> productRequests) {
        List<ResponseSaver> list = new ArrayList<>();
        for (int x = 0; x < productRequests.size(); x++) {
            if (checker(productRequests.get(x))) {
                list.add(new ResponseSaver(x + 1, true));
            } else {
                list.add(new ResponseSaver(x + 1, false));
            }
        }
        return list;
    }

    public void saveDataAfterCheck(List<ProductSaveRequest> productSaveRequests) {
        for (ProductSaveRequest productSaveRequest : productSaveRequests) {
            if (productSaveRequest.isStatus()) {
//                logger.info("saveDataAfterCheck: true");
//                logger.info("ProductRequest: " + productSaveRequest);
                update(productSaveRequest.getProduct());
            } else {
//                logger.info("saveDataAfterCheck: false");
                saveAfterCheck(productSaveRequest.getProduct());
            }
        }
    }

    private boolean checker(ProductRequest productRequest) {
        if (productRep.findByName(productRequest.getName()) == null) {
            save(productRequest);
            return true;
        } else {
            return false;
        }
    }

    private void save(ProductRequest productRequest){
        Product product = new Product();
        int count = Integer.parseInt(productRequest.getCount());
        String name = productRequest.getName();
        product.setName(name);
        product.setCount(count);
        productRep.save(product);
    }
    private void saveAfterCheck(ProductRequest productRequest) {
        int count = Integer.parseInt(productRequest.getCount());
        Product product = productRep.findByName(productRequest.getName());
        product.setCount(count);
        productRep.save(product);
    }

    private void update(ProductRequest productRequest){
        Product product = productRep.findByName(productRequest.getName());
        int count = product.getCount() + Integer.parseInt(productRequest.getCount());
        product.setCount(count);
        String name = productRequest.getName();
        logger.info("count: " + count + "name: " + name);
        productRep.save(product);
    }
}
