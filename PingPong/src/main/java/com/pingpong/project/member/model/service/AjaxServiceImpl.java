package com.pingpong.project.member.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.member.model.dao.AjaxDAO;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.search.model.dto.SearchTag;

@Service // 서비스임을 명시 + bean으로 등록
public class AjaxServiceImpl implements AjaxService{

	@Autowired // DI(의존성 주입)
	private AjaxDAO dao;

//	// 이메일로 닉네임 조회
//	@Override
//	public String selectNickname(String email) {
//		
//		return dao.selectNickname(email);
//	}
//
//	// 닉네임으로 전화번호 조회
//	@Override
//	public String selectMemberTel(String nickname) {
//		
//		return dao.selectMemberTel(nickname);
//	}

	// 이메일 중복 검사
	@Override
	public int checkEmail(String email) {
		
		return dao.checkEmail(email);
	}

	// 닉네임 중복 검사
	@Override
	public int checkNickname(String nickname) {
		return dao.checkNickname(nickname);
	}

	// 이메일로 회원 정보 조회
	@Override
	public Member selectMember(String email) {
		
		return dao.selectMember(email);
	}

	// 닉네임이 일부라도 일치하는 모든 회원 조회 (40명)
	@Override
	public List<Member> selectAllNickname(String input) {
		return dao.selectAllNickname(input);
	}
	// 태그가 일부라도 일치하는 모든 태그 조회 (40명)
	@Override
	public List<SearchTag> selectAllTag(String headerOpenSearchBox) {
		return dao.selectAllTag(headerOpenSearchBox);
	}

	// URL 중복 검사
	@Override
	public int checkUrl(String URL) {
		return dao.checkUrl(URL);
	}

	
	
}
