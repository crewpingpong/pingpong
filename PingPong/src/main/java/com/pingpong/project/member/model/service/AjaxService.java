package com.pingpong.project.member.model.service;

import java.util.List;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.search.model.dto.SearchTag;

public interface AjaxService {

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

	/** 닉네임이 일부라도 일치하는 모든 회원 조회 (40명)
	 * @param input
	 * @return List
	 */
	List<Member> selectAllNickname(String input);
	
	/** 태그가 일부라도 일치하는 모든 태그 조회 (40명)
	 * @param input
	 * @return List
	 */
	List<SearchTag> selectAllTag(String headerOpenSearchBox);

	/**	URL 중복 검사
	 * @param URL
	 * @return result
	 */
	int checkUrl(String URL);
	
	//////////////////////////////////////////
	/** 이메일로 회원 정보 조회
	 * @param email
	 * @return
	 */
	Member selectMember(String email);



}
