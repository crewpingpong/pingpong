package com.pingpong.project.mypage.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MypageDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	

	public int backgroundUpdate(Map<String, Object> map) {
		return sqlSession.update("memberProfileMapper.backgroundUpdate", map);
	}

}
