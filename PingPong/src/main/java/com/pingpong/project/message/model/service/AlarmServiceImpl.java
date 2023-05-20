package com.pingpong.project.message.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.message.dao.AlarmDAO;
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

	
	
}
