package com.pingpong.project.message.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.message.dao.AlarmDAO;
import com.pingpong.project.message.model.dto.Follow;
import com.pingpong.project.message.model.dto.Notice;

@Service
public class AlarmServiceImpl implements AlarmService{

	@Autowired
	private AlarmDAO dao;
	
	// 알람 메세지를 보낸 사람의 프로필 이미지 조회
	@Override
	public String selectProfileImage(int sendNo) {
		return dao.selectProfileImage(sendNo);
	}

	// 알람을 받는 사람 번호(== 게시글 작성)
	@Override
	public int selectMemberNo(int boardNo) {
		return dao.selectMemberNo(boardNo);
	}

	// 알람 삽입
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int insertAlarm(Notice notice) {
		return dao.insertAlarm(notice);
	}
	
//	// 팔로우 여부
//	@Override
//	public int followCheck(Follow follow) {
//		return dao.followCheck(follow);
//	}
	
	// 팔로우 여부
	@Override
	public int followCheck(Map<String, Integer> follow) {
		return dao.followCheck(follow);
	}
	
	
	
	// 내가 팔로우 하는 사람들
	@Override
	public List<Follow> myfollowList(Map<String, Integer> follow) {
		return dao.myfollowList(follow);
	}
		
	// 나를 팔로우 하는 사람들
	@Override
	public List<Follow> mefollowList(Map<String, Integer> follow) {
		return dao.mefollowList(follow);
	}

	// 팔로우 처리
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int followFL(Follow follow) {
		int result = 0;
		
		if(follow.getCheck()==0) { // 팔로우 안되어 있으면
			result = dao.follow(follow);
		} else { // 팔로우 되어 있으면
			result = dao.unfollow(follow);			
		}
		if(result == 0) return -1;
		System.out.println(result);
		
		return result;
	}

	

	
//	// 팔로우 삽입
//	@Override
//	public int follow(Follow follow) {
//		return dao.follow(follow);
//	}

//	// 팔로우 취소
//	@Override
//	public int unfollow(Follow follow) {
//		return dao.unfollow(follow);
//	}


	
	
	

	
	
}
