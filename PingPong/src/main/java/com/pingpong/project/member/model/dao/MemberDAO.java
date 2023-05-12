package com.pingpong.project.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.member.model.dto.Member;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public Member login(Member inputMember) {
		return sqlSession.selectOne("memberMapper.login", inputMember);
	}


	// 회원가입 서비스
	public int signupInfo(Member inputMember) {
		return sqlSession.insert("memberMapper.signupInfo",inputMember);
	}

}