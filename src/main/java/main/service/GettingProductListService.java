package main.service;

import main.dto.ProductResponse;
import main.model.ShelfProduct;
import main.repository.ShelfProductRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class GettingProductListService {
    Logger logger = Logger.getLogger(GettingProductListService.class.getName());
    @Autowired
    ShelfProductRep shelfProductRep;

    public List<ProductResponse> getProductByPosition(String position) {
        List<ProductResponse> responseList = new ArrayList<>();

        logger.info("ID after parse: " + (parseId(position)));
        int id = parseId(position);
//        List<ShelfProduct> list = shelfProductRep.findAllByShelfId(id);
        Iterable<ShelfProduct> list2 = shelfProductRep.findAll();

//        list.forEach(x-> logger.info("product: " + x));
        list2.forEach(x-> logger.info("productALL: " + x));
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
