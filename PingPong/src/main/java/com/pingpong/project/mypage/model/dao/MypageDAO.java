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
	
	/** 회원 비밀번호 조회
	 * @param memberNo
	 * @return encPw
	 */
	public String selectEncPw(int memberNo) {
		return sqlSession.selectOne("mypageMapper.selectEncPw", memberNo);
	}
	
	/** 비밀번호 변경
	 * @param newPw
	 * @param memberNo
	 * @return result
	 */
	public int changePw(String newPw, int memberNo) {		
		Member member = new Member();
		member.setMemberNo(memberNo);
		member.setMemberPw(newPw);
		
		return sqlSession.update("mypageMapper.changePw", member);
	}
	
	/** 회원 탈퇴 
	 * @param memberNo
	 * @return result
	 */
	public int secession(int memberNo) {
		return sqlSession.update("mypageMapper.secession", memberNo);
	}
	
	public int backgroundUpdate(Map<String, Object> map) {
		return sqlSession.update("memberProfileMapper.backgroundUpdate", map);
	}


	

}