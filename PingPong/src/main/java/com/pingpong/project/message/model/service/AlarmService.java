package com.pingpong.project.message.model.service;

import com.pingpong.project.message.model.dto.Notice;

public interface AlarmService {

	/** 알람 메세지를 보낸 사람의 프로필 이미지 조회
	 * @param sendNo
	 * @return
	 */
	String selectProfileImage(int sendNo);

	/** 알람을 받는 사람 번호(== 게시글 작성)
	 * @param boardNo
	 * @return
	 */
	int selectMemberNo(int boardNo);

	/** 알람 삽입
	 * @param notice
	 * @return
	 */
	int insertAlarm(Notice notice);

}
