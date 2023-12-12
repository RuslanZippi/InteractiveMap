package main.service;

import main.dto.ProductParseResponse;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class CSVParser {
    Logger logger = Logger.getLogger(CSVParser.class.getName());

    public List<ProductParseResponse> reader(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        List<ProductParseResponse> list = new ArrayList<>();
        while (reader.ready()) {
            String line = reader.readLine().replace(", , ", "").replace("\t\t\t\t\t\t\t\t", "  ");
            String name = line.split("  ")[0];
            String type = line.split("  ")[1].split("\t")[0];
            String count = line.split("  ")[1].split("\t")[1];
            list.add(new ProductParseResponse(name,type,Double.parseDouble(count)));
        }

        System.out.println(list.size());
        return list;
    }
}
