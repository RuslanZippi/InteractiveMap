package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.logging.Logger;

@Controller
@RequestMapping("/")
public class MainController {

    Logger logger = Logger.getLogger(MainController.class.getName());

    @GetMapping
    @RequestMapping("/map")
    public String main(){
        return "main";
    }


    @RequestMapping(method = RequestMethod.GET)
    public String reMain(){
        return "redirect:/map";
    }
}
