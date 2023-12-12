package main.controller;

import main.dto.ProductCart;
import main.dto.ProductResponse;
import main.dto.ResponseSaver;
import main.dto.request.ProductList;
import main.dto.request.ProductRequest;
import main.dto.request.ProductSaveRequest;
import main.service.GettingProductService;
import main.service.SaverService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/product")
public class DataController {

    final
    GettingProductService service;

    final
    SaverService saverService;

    Logger logger = Logger.getLogger(DataController.class.getName());

    public DataController(GettingProductService service, SaverService saverService) {
        this.service = service;
        this.saverService = saverService;
    }

    @GetMapping()
    @RequestMapping("/")
    public ResponseEntity<List<ProductResponse>> testData(@RequestParam String id) {
        logger.info("ID: " + id);
        return new ResponseEntity<List<ProductResponse>>(service.getProductByPosition(id), HttpStatus.OK);
    }

    @PostMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ResponseSaver>> updateData(@RequestBody List<ProductRequest> requestList) {
        logger.info("size: " + requestList.size());
        return new ResponseEntity<>(saverService.saveData(requestList), HttpStatus.OK);
    }

    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> saveData(@RequestBody List<ProductSaveRequest> list) {
        logger.info("saveData list size: " + list.size());
        saverService.saveDataAfterCheck(list);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductList>> getAllProduct(){
        return new ResponseEntity<>(service.getAllProductList(),HttpStatus.OK);
    }
}
