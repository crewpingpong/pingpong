package com.pingpong.project.manager.service;

import java.util.Map;

public interface ManagerService {

	/** 관리자 페이지 가입 회원 목록 조회
	 * @return map
	 */
	Map<String, Object> selectMemberList();

	/** 관리자 페이지 탈퇴 회원 목록 조회
	 * @return SecessionList
	 */
	Map<String, Object> selectSessionList();

}
