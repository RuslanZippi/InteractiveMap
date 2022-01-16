package main.controller;

import main.dto.ProductResponse;
import main.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/product")
public class DataController {

    @Autowired
    TestService service;

    Logger logger = Logger.getLogger(DataController.class.getName());

    @GetMapping()
    @RequestMapping("/")
    public ResponseEntity<List<ProductResponse>> testData(@RequestParam String id){
        logger.info("ID: " + id);
        return new ResponseEntity<List<ProductResponse>>(service.getProductByPosition(id), HttpStatus.OK);
    }
}
