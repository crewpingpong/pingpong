package com.pingpong.project.search.model.service;

import java.util.List;
import java.util.Map;

public interface SearchService {

	List<Map<String, Object>> headerSearch(String query);

}
