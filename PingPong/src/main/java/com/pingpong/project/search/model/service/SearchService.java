package com.pingpong.project.search.model.service;

import java.util.List;
import java.util.Map;

public interface SearchService {

	/** 헤더 검색
	 * @param query
	 * @return list
	 */
	List<Map<String, Object>> headerSearch(String query);

}
