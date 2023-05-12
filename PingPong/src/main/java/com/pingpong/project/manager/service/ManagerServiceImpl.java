package com.pingpong.project.manager.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.board.dto.Board;
import com.pingpong.project.manager.dao.ManagerDAO;
import com.pingpong.project.member.model.dto.Member;

@Service
public class ManagerServiceImpl implements ManagerService{

	@Autowired
	private ManagerDAO dao;

	// 가입 회원 목록 조회
	@Override
	public Map<String, Object> selectMemberList() {
		
		List<Member> memberList = dao.selectMemberList();
		
		Map<String, Object> map = new HashMap<>();
		map.put("memberList", memberList);
		
		return map;
	}
	
	// 탈퇴 회원 목록 조회
	@Override
	public Map<String, Object> selectSessionList() {

		List<Member> memberList = dao.selectSessionList();
		
		Map<String, Object> SecessionList = new HashMap<>();
		SecessionList.put("memberList", memberList);
		
		return SecessionList;
	}
	
	
}
