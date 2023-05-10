package com.pingpong.project.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class MainController {
   
   /**
    * Simply selects the home view to render by returning its name.
    */
   @RequestMapping(value = "/")
   public String home() {      
      
      
      return "common/index";
   }
   
}