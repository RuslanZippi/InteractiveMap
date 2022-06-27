package main.service;

import main.dto.ProductResponse;
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
