package com.pingpong.project.manager.service;

import java.util.List;
import java.util.Map;

import com.pingpong.project.board.dto.Board;
import com.pingpong.project.board.dto.Comment;
import com.pingpong.project.board.dto.Declaration;
import com.pingpong.project.board.dto.Inquiry;

public interface ManagerService {

	/** 관리자 페이지 가입 회원 목록 조회
	 * @return map
	 */
	Map<String, Object> selectMemberList();

	/** 관리자 페이지 탈퇴 회원 목록 조회
	 * @return SecessionList
	 */
	Map<String, Object> selectSessionList();

	/** 관리자 페이지 게시글 목록 조회
	 * @return boardList
	 */
	List<Board> selectBoardList();

	/** 관리자 페이지 댓글 목록 조회
	 * @return CommentList
	 */
	List<Comment> selectCommentList();

	/** 관리자 페이지 1:1 문의 목록 조회
	 * @return InquiryList
	 */
	List<Inquiry> selectInquiryList();

	/** 관리자 페이지 신고함 목록 조회
	 * @return  DeclarationList
	 */
	List<Declaration> selectDeclarationList();

}
