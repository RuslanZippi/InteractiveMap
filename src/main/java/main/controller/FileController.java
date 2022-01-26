package main.controller;

import main.dto.ProductParseResponse;
import main.service.PDFParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

@Controller
public class FileController {
    final
    PDFParser pdfParser;

    Logger logger = Logger.getLogger(FileController.class.getName());

    public FileController(PDFParser pdfParser) {
        this.pdfParser = pdfParser;
    }

    @PostMapping(value = "/uploadPdf", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<List<ProductParseResponse>> uploadSingleFileExample1(@RequestPart("file") MultipartFile file) throws IOException {
        logger.info("Request contains, File: " + file.getOriginalFilename());
        logger.info("format file: " + file.getContentType());
        // Add your processing logic here
        return new ResponseEntity<List<ProductParseResponse>>(pdfParser.reader(file.getInputStream()), HttpStatus.OK);
    }
}
