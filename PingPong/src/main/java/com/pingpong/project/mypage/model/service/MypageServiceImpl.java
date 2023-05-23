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
import com.pingpong.project.board.model.dto.Pagination;
import com.pingpong.project.common.utility.Util;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dao.MypageDAO;
import com.pingpong.project.mypage.model.dto.Interest;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.dto.SNS;
import com.pingpong.project.mypage.model.dto.Tech;
import com.pingpong.project.mypage.model.exception.FileUploadException;

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
	
	// 프로필 이미지 수정 서비스
	@Override
	public int updateProfile(MultipartFile profileImage, String reName, String webPath, String filePath, int memberNo) throws IllegalStateException, IOException {
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("memberNo", memberNo);
		
		map.put("profileImage", webPath+reName);
		
		int result = dao.updateProfile(map);
		
		if(result == 0) {
			result = dao.backgroundInsert(map);
		} 
		if(result != 0) {
			profileImage.transferTo(new File(filePath+reName));
		} else {
			throw new FileUploadException();
		}
		
		return result;
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
		
		// 회원번호가 일치하는 회원의 비밀번호 조회
		String encPw = dao.selectEncPw(memberNo);
		
		// 비밀번호 일치
		if(bcrypt.matches(memberPw, encPw)) {
			
			return dao.secession(memberNo); 
		}
		
		// 비밀번호 일치 X
		return 0;
	}
	

	// 배경화면 변경 서비스
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) throws IllegalStateException, IOException {
		
		Map<String, Object> map = new HashMap<>();  // map 으로 담아서 전달
		
		map.put("memberNo", memberNo);  // 회원번호 담기
		
		String fileName = backgroundImage.getOriginalFilename();
		
		String reName = Util.fileRename(fileName);  // 파일 이름 변경
		
		map.put("backgroundImage", webPath+reName);  // 경로와 변경된 파일 이름 합쳐서 전달
		
		int result = dao.backgroundUpdate(map);
		System.out.println(result);
		if(result == 0) {
			result = dao.backgroundInsert(map);
		} 
		if(result != 0) {
			backgroundImage.transferTo(new File(filePath+reName));
		} else {
			throw new FileUploadException();
		}
		return result;
	}

	// 게시글 가져오기
	@Override
	public List<Board> selectBoardList(int memberNo) {
		return dao.selectBoardList(memberNo);
	}

	// 회원 프로필 정보 가져오기
	@Override
	public MyPage selectMemberProfile(int memberNo) {
		return dao.selectMemberProfile(memberNo);
	}

	// 게시글 컬렉션 가져오기
	@Override
	public List<Board> selectBoardMarkList(int memberNo) {
		return dao.selectBoardMarkList(memberNo);
	}

	@Override
	public List<Board> selectBoardLikeList(int memberNo) {
		return dao.selectBoardLikeList(memberNo);
	}

	// 프로필 정보 수정
	@Override
	public int updateProfileInfo(MyPage updateMyPage) {
		return dao.updateProfileInfo(updateMyPage);
	}

	
	
	
	// 전체 지식/기술 리스트 조회
	@Override
	public List<Tech> selectTechList() {
		return dao.selectTechList();
	}
	
	// 선택된 지식/기술 리스트 조회
	@Override
	public List<Tech> seletCheckTechList(int memberNo) {
		return dao.seletCheckTechList(memberNo);
	}
	
	// 선택된 지식/기술 리스트 삽입
	@Override
	public int insertNewTechList(Map<String, Object> techMap) {
		return dao.insertNewTechList(techMap);
	}
	// 지식/기술 리스트 전체 삭제
	@Override
	public int techListDeleteAll(int memberNo) {
		return dao.techListDeleteAll(memberNo);
	}
	
	
	
	


	
	

	
	
	// 전체 관심분야 리스트 조회
	@Override
	public List<Interest> selectInterestList() {
		return dao.selectInterestList();
	}
	
	// 선택한 interestList 조회
	@Override
	public List<Tech> seletCheckInterestList(int memberNo) {
		return dao.seletCheckInterestList(memberNo);
	}
	
	// 체크된 interestList 삽입
	@Override
	public int insertNewInterestList(Map<String, Object> interestMap) {
		return dao.insertNewInterestList(interestMap);
	}
	
	
	
	

	// 전체 SNS 리스트 조회
	@Override
	public List<SNS> selectSNSList() {
		return dao.selectSNSList();
	}
	
	// 선택한 SNSList 조회
	@Override
	public List<Tech> seletCheckSNSList(int memberNo) {
		return dao.seletCheckSNSList(memberNo);
	}
	
	
	
	
	
	
	







	




}
