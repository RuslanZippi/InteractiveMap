package main.controller;

import main.dto.ProductResponse;
import main.dto.request.ProductRequest;
import main.model.Product;
import main.service.GettingProductListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/product")
public class DataController {

    @Autowired
    GettingProductListService service;

    Logger logger = Logger.getLogger(DataController.class.getName());

    @GetMapping()
    @RequestMapping("/")
    public ResponseEntity<List<ProductResponse>> testData(@RequestParam String id){
        logger.info("ID: " + id);
        return new ResponseEntity<List<ProductResponse>>(service.getProductByPosition(id), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateData(@RequestBody ProductRequest productRequest){

        return new ResponseEntity<>("OK",HttpStatus.OK);
    }
}
