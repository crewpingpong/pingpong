package com.pingpong.project.mypage.model.service;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.Interests;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.dto.SNS;
import com.pingpong.project.mypage.model.dto.Tech;

public interface MypageService {

	/** 회원 정보 수정 서비스
	 * @param updateMember
	 * @return result
	 */
	int updateInfo(Member updateMember);

	/** 회원 비밀번호 변경 서비스
	 * @param currentPw
	 * @param newPw
	 * @param memberNo
	 * @return result
	 */
	int changePw(String currentPw, String newPw, int memberNo);

	/** 회원 탈퇴 서비스
	 * @param memberPw
	 * @param memberNo
	 * @return result
	 */
	int secession(String memberPw, int memberNo);

	/** 배경화면 변경 서비스
	 * @param memberNo
	 * @param backgroundImage
	 * @param webPath
	 * @param filePath
	 * @return result
	 */
	int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) throws IllegalStateException, IOException;

	/** 회원 게시글 조회
	 * @param memberUrl
	 * @return boardList
	 */
	List<Board> selectBoardList(int memberNo);

	/** 회원 프로필 조회
	 * @param memberNo
	 * @return myPage
	 */
	MyPage selectMemberProfile(int memberNo);

	/** 북마크한 게시글 조회
	 * @param memberNo
	 * @return boardMarkList
	 */
	List<Board> selectBoardMarkList(int memberNo);

	/** 좋아요 누른 게시글 조회
	 * @param memberNo
	 * @return boardLikeList
	 */
	List<Board> selectBoardLikeList(int memberNo);
	
	/** 프로필 이미지 기본
	 * @param memberNo
	 * @return
	 */
	int updateBasicProfile(int memberNo);

	/** 프로필 이미지 수정
	 * @param profileImage
	 * @param webPath
	 * @param filePath
	 * @param loginMember
	 * @return result
	 */
	int updateProfile(MultipartFile profileImage, String reName, String webPath, String filePath, Member loginMember) throws IllegalStateException, IOException ;


	/** 프로필 정보 수정
	 * @param updateMember
	 * @return
	 */
	int updateProfileInfo(MyPage updateMyPage);

	
	
	
	
	/** 전체 techList 조회
	 * @return
	 */
	List<Tech> selectTechList();

	/** 체크한 techList 조회
	 * @return
	 */
	List<Tech> selectCheckTechList(int memberNo);
	
	/** techList 전체 삭제 후 techList 삽입 진행
	 * @param memberNo
	 * @return
	 */
	int techListDeleteAll(int memberNo);
	
	/** 체크한 techList 삽입
	 * @param selectedtechList
	 * @return
	 */
	int insertNewTechList(Map<String, Object> techMap);
	
	/** 체크한 techImgList 조회 (아이콘)
	 * @param memberNo
	 * @return
	 */
	List<Tech> seletCheckTechImgList(int memberNo);
	
	
	
	

	/** 전체 interestList 조회
	 * @return
	 */
	List<Interests> selectInterestList();
	
	/** 체크한 interestList 조회
	 * @param memberNo
	 * @return
	 */
	List<Interests> selectCheckInterestList(int memberNo);
	
	/** interestList 전체 삭제 후 interestList 삽입 진행
	 * @param memberNo
	 * @return
	 */
	int interestListDeleteAll(int memberNo);
	
	/** 체크한 interestList 삽입
	 * @param interestMap
	 * @return
	 */
	int insertNewInterestList(Map<String, Object> interestMap);
	
	
	
	

	/** 전체 SNSList 조회
	 * @return
	 */
	List<SNS> selectSNSList();
	
	/** 체크한 SNSList 조회
	 * @param memberNo
	 * @return
	 */
	List<SNS> seletCheckSNSList(int memberNo);

	/** SNSList 전체 삭제 후 SNSList 삽입 진행
	 * @param memberNo
	 * @return
	 */
	int snsListDeleteAll(int memberNo);
	
	/** 체크한 SNSList 삽입
	 * @param s
	 * @return
	 */
	int insertNewSnsList(SNS s);

	/** 체크한 snsImgList 조회 (아이콘)
	 * @param memberNo
	 * @return
	 */
	List<SNS> selectCheckSNSImgList(int memberNo);

	/** snsURL COUNT
	 * @param memberNo
	 * @return
	 */
	int selectSNSAddress(int memberNo);

	/** snsURL UPDATE
	 * @param selectedSnsAddress
	 * @return
	 */
	int updateSNSAddress(Map<String, Object> snsAddressMap);

	/** snsURL INSERT
	 * @param snsAddressMap
	 * @return
	 */
	int insertSNSAddress(Map<String, Object> snsAddressMap);

	/** 체크한 snsList의 URL 주소 (링크)
	 * @param memberNo
	 * @return
	 */
	List<SNS> selectSNSAddressList(int memberNo);

}