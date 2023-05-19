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

	// 비번 찾기 이메일 검사
	public int emailSearch(String memberEmail) {
		return sqlSession.selectOne("memberMapper.emailSearch", memberEmail);
	}

	// 비밀번호 찾기(변경)
	public int changePw(String newMemberPw, String memberEmail) {
		Member member = new Member();
		member.setMemberEmail(memberEmail);
		member.setMemberPw(newMemberPw);
		return sqlSession.update("memberMapper.changePw", member);
	}

}