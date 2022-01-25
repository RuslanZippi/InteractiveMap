package main.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.logging.Logger;

@Controller
public class FileController {

    Logger logger = Logger.getLogger(FileController.class.getName());

    @PostMapping(value = "/uploadPdf", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadSingleFileExample1(@RequestPart("file") MultipartFile file) {
        logger.info("Request contains, File: " + file.getOriginalFilename());
        // Add your processing logic here
        return ResponseEntity.ok("Success");
    }
}
