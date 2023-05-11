package com.pingpong.project.member.model.service;

import com.pingpong.project.member.model.dto.Member;

public interface MemberService {

	Member login(Member inputMember);

	/** 회원가입 서비스
	 * @param inputMember
	 * @return result
	 */
	int signupInfo(Member inputMember);

}