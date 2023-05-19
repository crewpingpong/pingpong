package com.pingpong.project.search.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pingpong.project.search.model.service.SearchService;

//@Controller
public class SearchController {
	
	@Autowired
	private SearchService service;
	
    @GetMapping(value="/headerSearch", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public List<Map<String, Object>> headerSearch(String query){
    	return service.headerSearch(query);
    }

}
