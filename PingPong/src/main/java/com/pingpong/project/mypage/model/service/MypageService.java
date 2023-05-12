package com.pingpong.project.mypage.model.service;

import com.pingpong.project.member.model.dto.Member;

public interface MypageService {

	/** 회원 정보 수정 서비스
	 * @param updateMember
	 * @return result
	 */
	int updateInfo(Member updateMember);

}
