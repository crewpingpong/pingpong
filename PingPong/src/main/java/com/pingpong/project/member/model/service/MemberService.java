package com.pingpong.project.member.model.service;

import com.pingpong.project.member.model.dto.Member;

public interface MemberService {

	Member login(Member inputMember);

	/** 회원가입 서비스
	 * @param inputMember
	 * @return result
	 */
	int signupInfo(Member inputMember);

	/** 비번찾기 이메일 유무 검사
	 * @param memberEmail
	 * @return result
	 */
	int emailSearch(String memberEmail);

}