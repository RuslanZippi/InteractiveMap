package main.controller;

import main.dto.request.ProductList;
import main.service.ProductListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/account")
public class AccountController {
    @Autowired
    ProductListService productListService;

    @GetMapping("/allProduct")
    public ResponseEntity<List<ProductList>> getProductList(){
        return new ResponseEntity<>(productListService.getAllProduct(), HttpStatus.OK);
    }
}
