package com.pingpong.project.message.model.service;

import java.util.List;
import java.util.Map;

import com.pingpong.project.message.model.dto.Follow;
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

	
	/** 최근 알람 20개 조회
	 * @param memberNo
	 * @return
	 */
	List<Notice> alarmList(int memberNo);
	

	
	/** 팔로우 여부 확인
	 * @param follow
	 * @return
	 */
	int followCheck(Map<String, Integer> follow);
	
	/** 팔로우 처리
	 * @param follow
	 * @return
	 */
	int followFL(Follow follow);

	/** 내가 팔로우 하는 사람들
	 * @param i
	 * @return
	 */
	List<Follow> myfollowList(int followerNo);

	/** 내가 팔로우 하는 사람들 수 조회
	 * @param memberNo
	 * @return
	 */
	int myFollowCount(int memberNo);
	
	/** 나를 팔로우 하는 사람들
	 * @param follow
	 * @return
	 */
	List<Follow> mefollowList(int followerNo);


	

	
//	/** 팔로우 삽입
//	 * @param follow
//	 * @return
//	 */
//	int follow(Follow follow);
//
//
	/** 팔로우 취소
	 * @param follow
	 * @return
	 */
	int unfollow2(Follow follow);



}
