package com.pingpong.project.member.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.search.model.dto.SearchTag;

@Repository // DB 연결 의미 + bean 등록
public class AjaxDAO {
	
	@Autowired // bean 중에서 타입이 같은 객체를 DI(의존성 주입)
	private SqlSessionTemplate sqlSession;

	// 이메일로 닉네임 조회
	public String selectNickname(String email) {
		return sqlSession.selectOne("ajaxMapper.selectNickname", email);
	}

	// 이메일 중복 검사
	public int checkEmail(String email) {
		return sqlSession.selectOne("ajaxMapper.checkEmail", email);
	}

	// 닉네임 중복 검사
	public int checkNickname(String nickname) {
		return sqlSession.selectOne("ajaxMapper.checkNickname", nickname);
	}

	// URL 중복 검사
	public int checkUrl(String URL) {
		return sqlSession.selectOne("ajaxMapper.checkUrl", URL);
	}
		
	// 닉네임이 일부라도 일치하는 모든 회원 조회 (40명)
	public List<Member> selectAllNickname(String input) {
		return sqlSession.selectList("ajaxMapper.selectAllNickname", input);
	}
	// 태그가 일부라도 일치하는 모든 태그 조회 (40명)
	public List<SearchTag> selectAllTag(String headerOpenSearchBox) {
		return sqlSession.selectList("ajaxMapper.selectAllTag", headerOpenSearchBox);
	}
	
	//////////////////////////////////////////////////////////
	// 이메일로 회원 정보 조회
	public Member selectMember(String email) {
		return sqlSession.selectOne("ajaxMapper.selectMember", email);
	}

	
	// 닉네임으로 전화번호 조회
	public String selectMemberTel(String nickname) {
		return sqlSession.selectOne("ajaxMapper.selectMemberTel", nickname);
	}
	

}
