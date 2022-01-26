package main.service;

import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.parser.PdfTextExtractor;
import com.itextpdf.text.pdf.parser.SimpleTextExtractionStrategy;
import com.itextpdf.text.pdf.parser.TextExtractionStrategy;
import main.dto.ProductParseResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

@Service
public class PDFParser {
    Logger logger = Logger.getLogger(PDFParser.class.getName());

    public List<ProductParseResponse> reader(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        List<ProductParseResponse> list = new ArrayList<>();
        while (reader.ready()) {
//            System.out.println(reader.readLine().replace(", ,", ""));
            String line = reader.readLine().replace(", , ", "").replace("\t\t\t\t\t\t\t\t", "  ");
            String name = line.split("  ")[0];
            String type = line.split("  ")[1].split("\t")[0];
            String count = line.split("  ")[1].split("\t")[1];
//            System.out.println(name + " " + type + " " + count);
//            list.add(new ProductParseResponse(line.split("\t")[0], line.split("\t")[1].split(" ")[0], Double.parseDouble(line.split("\t")[1].split(" ")[1])));
            list.add(new ProductParseResponse(name,type,Double.parseDouble(count)));
        }

        System.out.println(list.size());
        return list;
    }
}
