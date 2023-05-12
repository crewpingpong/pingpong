package com.pingpong.project.member.model.service;

import java.util.List;

import com.pingpong.project.member.model.dto.Member;

public interface AjaxService {

//	/** 이메일로 닉네임 조회
//	 * @param email
//	 * @return
//	 */
//	String selectNickname(String email);
//
//	/** 닉네임으로 전화번호 조회
//	 * @param nickname
//	 * @return
//	 */
//	String selectMemberTel(String nickname);

	
	/** 이메일 중복 검사
	 * @param email
	 * @return result
	 */
	int checkEmail(String email);

	/**	닉네임 중복 검사
	 * @param nickname
	 * @return result
	 */
	int checkNickname(String nickname);

	/** 이메일로 회원 정보 조회
	 * @param email
	 * @return
	 */
	Member selectMember(String email);

	/** 이메일이 일부라도 일치하는 모든 회원 조회
	 * @param input
	 * @return
	 */
	List<Member> selectMemberList(String input);

}
