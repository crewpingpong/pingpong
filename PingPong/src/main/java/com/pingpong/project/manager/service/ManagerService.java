package com.pingpong.project.manager.service;

import java.util.List;
import java.util.Map;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;

public interface ManagerService {

	/** 관리자 페이지 가입 회원 목록 조회
	 * @param cp 
	 * @return map
	 */
	Map<String, Object> selectMemberList(int cp);

	/** 관리자 페이지 탈퇴 회원 목록 조회
	 * @param cp 
	 * @return map
	 */
	Map<String, Object> selectSecessionList(int cp);

	/** 관리자 페이지 게시글 목록 조회
	 * @param cp 
	 * @return map
	 */
	Map<String, Object> selectBoardList(int cp);

	/** 관리자 페이지 댓글 목록 조회
	 * @param cp 
	 * @return map
	 */
	Map<String, Object> selectCommentList(int cp);

	/** 관리자 페이지 1:1 문의 목록 조회
	 * @param cp 
	 * @return map
	 */
	Map<String, Object> selectInquiryList(int cp);

	/** 관리자 페이지 신고함 목록 조회
	 * @param cp 
	 * @return  map
	 */
	Map<String, Object> selectDeclarationList(int cp);

	/** 체크된 회원 탈퇴
	 * @param boardNo
	 * @return result
	 */
	int deleteId(int boardNo);

	/** 탈퇴 회원 복구
	 * @param boardNo
	 * @return result
	 */
	int restoreId(int boardNo);

	/** 체크된 게시글 삭제
	 * @param boardNo
	 * @return result
	 */
	int deletePost(int boardNo);

	/** 체크된 게시글 복구
	 * @param boardNo
	 * @return result
	 */
	int restorePost(int boardNo);

	/** 체크된 댓글 삭제
	 * @param boardNo
	 * @return result
	 */
	int commentdel(int commentNo);

	/** 체크된 댓글 복구
	 * @param commentNo
	 * @return result
	 */
	int commentRe(int commentNo);

	/** 검색된 가입 회원 목록 조회
	 * @param paramMap
	 * @param cp
	 * @return map
	 */
	Map<String, Object> selectMemberList(Map<String, Object> paramMap, int cp);

	/** 검색된 탈퇴 회원 목록 조회
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectSecessionList(Map<String, Object> paramMap, int cp);

	/** 검색된 게시글 목록 조회
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectBoardList(Map<String, Object> paramMap, int cp);

	/** 검색된 댓글 목록 조회
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectCommentList(Map<String, Object> paramMap, int cp);

	/** 검색된 1:1 문의 목록 조회
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectInquiryList(Map<String, Object> paramMap, int cp);

	
}
