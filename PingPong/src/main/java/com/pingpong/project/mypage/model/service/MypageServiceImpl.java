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
import com.pingpong.project.mypage.model.dto.Interests;
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
	
	
	// 프로필 정보 수정
	@Override
	public int updateProfileInfo(MyPage updateMyPage) {
		return dao.updateProfileInfo(updateMyPage);
	}
	
	
	// 프로필 이미지 기본
	@Override
	public int updateBasicProfile(int memberNo) {
		return dao.updateBasicProfile(memberNo);
	}
	
	
	// 프로필 이미지 수정 서비스
	@Override
	public int updateProfile(MultipartFile profileImage, String reName, String webPath, String filePath, Member loginMember) throws IllegalStateException, IOException {

		
		// 업로드 된 이미지가 있을 경우 <-> 없는 경우 (X 버튼)
		String rename = null; // 변경 이름 저장 변수
		
		if(profileImage.getSize() > 0) { // 업로드 된 이미지가 있을 경우
			
			// 1) 파일 이름 변경
			rename = Util.fileRename(profileImage.getOriginalFilename());
			
			// 2) 바뀐 이름 loginMember에 세팅
			loginMember.setProfileImage(webPath + rename);
									// 	/resources/images/member/20230510~~~.jpg
			
		}else { // 없는 경우 (X 버튼)
			loginMember.setProfileImage(null);
			// 세션 이미지를 null로 변경해서 삭제
		}
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("memberNo", loginMember.getMemberNo());
		
		map.put("profileImage", webPath+reName);
		
		int result = dao.updateProfile(map);
		
		if(result == 0) {
			result = dao.profileInsert(map);
		} 

		if(result != 0) {
			
			profileImage.transferTo(new File(filePath+reName));
			
		} else {
			
			// 이전 이미지로 프로필 다시 세팅
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
		
		String fileName = backgroundImage.getOriginalFilename();  // 파일의 진짜 이름 가져오기
		
		String reName = Util.fileRename(fileName);  // 파일 이름 변경
		
		map.put("backgroundImage", webPath+reName);  // 경로와 변경된 파일 이름 합쳐서 전달
		
		int result = dao.backgroundUpdate(map);  // 배경화면 UPDATE 요청 DAO
		
		if(result == 0) {  // 변경이 되지 않는다면
			result = dao.backgroundInsert(map);  // 배경화면 새로 INSERT 요청
		} 
		if(result != 0) {  // 변경 또는 삽입이 됐다면
			backgroundImage.transferTo(new File(filePath+reName));  // 서버 컴퓨터에 파일 저장
		} else {  // 실패 시
			throw new FileUploadException();  // 파일 예외 처리  
		}
		return result;  // 결과 반환
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


	
	
	
	// 전체 techList 조회
	@Override
	public List<Tech> selectTechList() {
		return dao.selectTechList();
	}

	// 체크한 techList 조회
	@Override
	public List<Tech> selectCheckTechList(int memberNo) {
		return dao.selectCheckTechList(memberNo);
	}

	// techList 전체 삭제
	@Override
	public int techListDeleteAll(int memberNo) {
		return dao.techListDeleteAll(memberNo);
	}
	
	// 체크한 techList 삽입
	@Override
	public int insertNewTechList(Map<String, Object> techMap) {
		return dao.insertNewTechList(techMap);
	}

	// 체크한 techImgList 조회
	@Override
	public List<Tech> seletCheckTechImgList(int memberNo) {
		return dao.seletCheckTechImgList(memberNo);
	}
	
	
	
	
	
	// 전체 interestList 조회
	@Override
	public List<Interests> selectInterestList() {
		return dao.selectInterestList();
	}
	
	// 체크한 interestList 조회
	@Override
	public List<Interests> selectCheckInterestList(int memberNo) {
		return dao.selectCheckInterestList(memberNo);
	}
	
	// interestList 전체 삭제
	@Override
	public int interestListDeleteAll(int memberNo) {
		return dao.interestListDeleteAll(memberNo);
	}
	
	// 체크한 interestList 삽입
	@Override
	public int insertNewInterestList(Map<String, Object> interestMap) {
		return dao.insertNewInterestList(interestMap);
	}
	
	
	
	
	
	// 전체 SNS 리스트 조회
	@Override
	public List<SNS> selectSNSList() {
		return dao.selectSNSList();
	}
	
	// 체크한 SNSList 조회
	@Override
	public List<SNS> seletCheckSNSList(int memberNo) {
		return dao.seletCheckSNSList(memberNo);
	}

	// SNSList 전체 삭제
	@Override
	public int snsListDeleteAll(int memberNo) {
		return dao.snsListDeleteAll(memberNo);
	}
	
	// 체크한 SNSList 삽입
	@Override
	public int insertNewSnsList(SNS s) {
		return dao.insertNewSnsList(s);
	}

	// 체크한 snsImgList 조회
	@Override
	public List<SNS> selectCheckSNSImgList(int memberNo) {
		return dao.selectCheckSNSImgList(memberNo);
	}

	// snsURL COUNT
	@Override
	public int selectSNSAddress(int memberNo) {
		return dao.selectSNSAddress(memberNo);
	}

	// snsURL UPDATE
	@Override
	public int updateSNSAddress(Map<String, Object> snsAddressMap) {
		return dao.updateSNSAddress(snsAddressMap);
	}

	// snsURL INSERT
	@Override
	public int insertSNSAddress(Map<String, Object> snsAddressMap) {
		return dao.insertSNSAddress(snsAddressMap);
	}

	// 체크한 snsList의 URL 주소 (링크)
	@Override
	public List<SNS> selectSNSAddressList(int memberNo) {
		return dao.selectSNSAddressList(memberNo);
	}



}
