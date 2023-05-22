package com.pingpong.project.search.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.search.model.dao.SearchDAO;

@Service
public class SearchServiceImpl implements SearchService{
	
	@Autowired
	private SearchDAO dao;

    // 헤더 검색
	@Override
	public List<Map<String, Object>> headerSearch(String query) {
		return dao.headerSearch(query);
	}

}
