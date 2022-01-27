package main.controller;

import main.dto.ProductResponse;
import main.dto.ResponseSaver;
import main.dto.request.ProductRequest;
import main.dto.request.ProductSaveRequest;
import main.model.Product;
import main.service.GettingProductListService;
import main.service.SaverService;
import org.springframework.beans.factory.annotation.Autowired;
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
    GettingProductListService service;

    final
    SaverService saverService;

    Logger logger = Logger.getLogger(DataController.class.getName());

    public DataController(GettingProductListService service, SaverService saverService) {
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
}
