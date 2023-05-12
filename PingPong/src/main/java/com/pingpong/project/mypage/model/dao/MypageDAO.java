package com.pingpong.project.mypage.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.member.model.dto.Member;

@Repository
public class MypageDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 회원 정보 수정 DAO
	 * @param updateMember
	 * @return result
	 */
	public int updateInfo(Member updateMember) {
		return sqlSession.update("mypageMapper.updateInfo", updateMember);

	}
		public int backgroundUpdate(Map<String, Object> map) {
		return sqlSession.update("memberProfileMapper.backgroundUpdate", map);
	}

}