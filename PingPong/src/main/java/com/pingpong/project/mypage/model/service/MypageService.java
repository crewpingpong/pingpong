package com.pingpong.project.mypage.model.service;


import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.MyPage;

public interface MypageService {

	/** 회원 정보 수정 서비스
	 * @param updateMember
	 * @return result
	 */
	int updateInfo(Member updateMember);

	/** 회원 비밀번호 조회
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


	/** 프로필 이미지 수정
	 * @param profileImage
	 * @param webPath
	 * @param filePath
	 * @param loginMember
	 * @return result
	 */
	int updateProfile(MultipartFile profileImage, String webPath, String filePath, int memberNo);
	



}