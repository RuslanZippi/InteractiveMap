package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.logging.Logger;

@Controller
public class MainController {

    Logger logger = Logger.getLogger(MainController.class.getName());
    @GetMapping("/")
    public RedirectView redirectToMain(){
        return new RedirectView("/map");
    }

    @RequestMapping("/map")
    public String main(){
        return "map";
    }

    @RequestMapping("/manager")
    public String manager(){
        return "management";
    }

    @RequestMapping("/account")
    public String account(){
        return "account";
    }

    @RequestMapping(method = {RequestMethod.OPTIONS, RequestMethod.GET}, value = "/{path:[^\\.]*}")
    public String redirectToIndex() {
        return "redirect:map";
    }

    @RequestMapping("/product-cart")
    public String redirectToIndexBase() {
        return "product";
    }

}
