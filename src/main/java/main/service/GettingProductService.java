package main.service;

import main.dto.ProductResponse;
import main.dto.request.ProductList;
import main.model.ShelfProduct;
import main.repository.ShelfProductRep;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class GettingProductService {
    Logger logger = Logger.getLogger(GettingProductService.class.getName());
    final
    ShelfProductRep shelfProductRep;

    public GettingProductService(ShelfProductRep shelfProductRep) {
        this.shelfProductRep = shelfProductRep;
    }

    public List<ProductList> getAllProductList(){
        ProductList productList;
        List<ProductList> list = new ArrayList<>();
        List<ShelfProduct> shelfProductList = (List<ShelfProduct>) shelfProductRep.findAll();
        for (int x=0; x< shelfProductList.size();x++){
//            logger.info("SHELF: " + shelfProductList.get(x).getProduct().getName());
            productList =  new ProductList();
            productList.setName(shelfProductList.get(x).getProduct().getName());
            productList.setCount(shelfProductList.get(x).getProduct().getCount());
            productList.setPosition(shelfProductList.get(x).getProduct().getPosition());
            productList.setId(shelfProductList.get(x).getProduct().getId());
            list.add(productList);
        }
        return list;
    }
    public List<ProductResponse> getProductByPosition(String position) {
        List<ProductResponse> responseList = new ArrayList<>();
        int id = parseId(position);
        logger.info(String.valueOf(id));
        List<ShelfProduct> list = shelfProductRep.findByShelfId(id);

        logger.info("size: " + list.size());
        for (ShelfProduct shelfProduct : list) {
            responseList.add(new ProductResponse(shelfProduct.getProduct().getName(), shelfProduct.getCount(), shelfProduct.getId().getProduct_id()));
        }
        return responseList;
    }

    private Integer parseId(String idForParse) {
        String id = idForParse.split("shelf")[1];
        String stand = id.split("_")[0];
        int shelf = Integer.parseInt(id.split("_")[1]);

        switch (stand) {
            case "A":
                return shelf;
            case "B":
                return shelf + 9;
            case "C":
                return shelf + 18;
            case "D":
                return shelf + 27;
            case "E":
                return shelf + 36;
            default:
                return 0;
        }
    }
}
