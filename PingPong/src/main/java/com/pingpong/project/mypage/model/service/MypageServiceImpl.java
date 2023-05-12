package com.pingpong.project.mypage.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.common.utility.Util;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dao.MypageDAO;

@Service
public class MypageServiceImpl implements MypageService{

	@Autowired
	private MypageDAO dao;

	// 회원 정보 수정 서비스
	@Transactional(rollbackFor = {Exception.class})
	@Override
	public int updateInfo(Member updateMember) {
		return dao.updateInfo(updateMember);
	}

	// 비밀번호 변경 서비스
	@Override
	public int changePw(String currentPw, String newPw, int memberNo) {

		// 1. 현재 비밀번호, DB에 저장된 비밀번호 비교
		// 1) 회원번호가 일치하는 MEMBER 테이블 행의 MEMBER_PW 조회
		/* String encPw = dao.selectEncPw(memberNo); */
		
		
		return 0;
	}

		@Override
	public int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) {
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("memberNo", memberNo);
		
		String fileName = Util.fileRename(backgroundImage.getOriginalFilename());
		
		map.put("backgroundImage", webPath+fileName);
		
		
		int result = dao.backgroundUpdate(map);
		
		System.out.println("123");
//		if(result == 0) {
//			result = dao.backgroundInsert(map);
//		}
		return result;
	}

}
