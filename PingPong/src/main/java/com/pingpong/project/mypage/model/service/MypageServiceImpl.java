package com.pingpong.project.mypage.model.service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.common.utility.Util;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dao.MypageDAO;
import com.pingpong.project.mypage.model.dto.MyPage;

@Service
public class MypageServiceImpl implements MypageService{

	@Autowired
	private MypageDAO dao;
	
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	

	// 회원 정보 수정 서비스
	@Transactional(rollbackFor = {Exception.class})
	@Override
	public int updateInfo(Member updateMember) {
		return dao.updateInfo(updateMember);
	}

	// 비밀번호 변경 서비스
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int changePw(String currentPw, String newPw, int memberNo) {

		// 1. 현재 비밀번호, DB에 저장된 비밀번호 비교
		// 1) 회원번호가 일치하는 MEMBER 테이블 행의 MEMBER_PW 조회
		String encPw = dao.selectEncPw(memberNo);
		
		// 2) bcrypt.matches(평문, 암호문) -> 같으면 true -> 이 때 비번 수정
		if(bcrypt.matches(currentPw, encPw)) {
			
			// 2. 비밀번호 변경(UPDATE DAO호출) -> 결과 반환
			return dao.changePw(bcrypt.encode(newPw), memberNo);
		}
		
		// 3. 비밀번호가 일치하지 않으면 0 반환
		return 0;
	}


	// 회원 탈퇴 서비스
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int secession(String memberPw, int memberNo) {
		
		// 1. 회원번호가 일치하는 회원의 비밀번호 조회
		String encPw = dao.selectEncPw(memberNo);
		
		// 2. 비밀번호가 일치하면 
		if(bcrypt.matches(memberPw, encPw)) {
			return dao.secession(memberNo);			
		}
		
		// 3. 비밀번호가 일치하지 않으면 0 반환
		return 0;
	}


	// 배경화면 변경 서비스
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) throws IllegalStateException, IOException {

		Map<String, Object> map = new HashMap<>();  // map 으로 담아서 전달
		
		map.put("memberNo", memberNo);  // 회원번호 담기
		
		System.out.println(backgroundImage.getOriginalFilename());
		
		String fileName = Util.fileRename(backgroundImage.getOriginalFilename());  // 파일 이름 변경
		
		map.put("backgroundImage", webPath+fileName);  // 경로와 변경된 파일 이름 합쳐서 전달
		
		int result = dao.backgroundUpdate(map);
		
		backgroundImage.transferTo(new File(filePath + fileName));
		
		if(result == 0) {
			result = dao.backgroundInsert(map);
		}
		
		return result;
	}

	// 게시글 가져오기
	@Override
	public List<Board> selectBoardList(int memberNo) {
		System.out.println("게시글~~");
		
		return dao.selectBoardList(memberNo);
	}

	// 회원 프로필 정보 가져오기
	@Override
	public MyPage selectMemberProfile(int memberNo) {
		return dao.selectMemberProfile(memberNo);
	}

}
