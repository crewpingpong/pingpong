package com.pingpong.project.manager.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.board.model.dto.Pagination;
import com.pingpong.project.manager.dao.ManagerDAO;
import com.pingpong.project.member.model.dto.Member;


/**
 * @author user
 *
 */
/**
 * @author user
 *
 */
@Service
public class ManagerServiceImpl implements ManagerService{

	@Autowired
	private ManagerDAO dao;

	// 가입 회원 목록 조회
	@Override
	public Map<String, Object> selectMemberList(int cp) {
		
		//1. DEL_FL이 'N'인 회원 수 카운트
		int listCount = dao.getListCount();
		
		//2. 1번 조회 결과 + cp 를 이용해서 Pagination 객체 생성
		Pagination pagination = new Pagination(listCount, cp);
		
		// 3. 특정 게시판에서
		// 현재 페이지에 해당하는 부분에 대한 게시글 목록 조회
		//  몇페이지(pagination.currentPage)에 대한 
		//  게시글 몇개(pagination.limit) 조회)
		List<Member> memberList = dao.selectMemberList(pagination);
		
		// 4. pagination, boardList를 Map에 담아서 반환
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("memberList", memberList);
		
		return map;
	}
	
	// 검색된 회원 목록 조회
		@Override
		public Map<String, Object> selectMemberList(Map<String, Object> paramMap, int cp) {
			
			int listCount = dao.getMemberListCount(paramMap);
			
			Pagination pagination = new Pagination(listCount, cp);
			
			List<Member> memberList = dao.selectMemberList(pagination, paramMap);
			
			Map<String, Object> map = new HashMap<>();
			map.put("pagination", pagination);
			map.put("memberList", memberList);
			
			return map;
		}	
	
	
	// 탈퇴 회원 목록 조회
	@Override
	public Map<String, Object> selectSecessionList(int cp) {

		int listCount = dao.getDelListCount();
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Member> memberList = dao.selectSecessionList(pagination);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("memberList", memberList);
		
		return map;
	}
	
	// 검색된 탈퇴 회원 목록 조회
	@Override
	public Map<String, Object> selectSecessionList(Map<String, Object> paramMap, int cp) {
		
		int listCount = dao.getDelListCount(paramMap);
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Member> memberList = dao.selectSecessionList(pagination, paramMap);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("memberList", memberList);
		
		return map;
	}

	
	// 게시글 목록 조회
	@Override
	public Map<String, Object> selectBoardList(int cp) {

		int listCount = dao.getContentListCount();
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Board> boardList = dao.selectBoardList(pagination);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("boardList", boardList);
		
		return map;
	}
	
	
	// 검색된 게시글 목록 조회
	@Override
	public Map<String, Object> selectBoardList(Map<String, Object> paramMap, int cp) {
			
		int listCount = dao.getContentListCount(paramMap);
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Board> boardList = dao.selectBoardList(pagination,paramMap);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("boardList", boardList);
		
		return map;
	}


	// 댓글 목록 조회
	@Override
	public Map<String, Object> selectCommentList(int cp) {
		
		int listCount = dao.getCommentListCount();
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Comment> CommentList = dao.selectCommentList(pagination);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("CommentList", CommentList);
		
		return map;
	}
	
	// 검색된 댓글 목록 조회
		@Override
		public Map<String, Object> selectCommentList(Map<String, Object> paramMap, int cp) {
			
		int listCount = dao.getCommentListCount(paramMap);
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Comment> CommentList = dao.selectCommentList(pagination,paramMap);
			
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("CommentList", CommentList);
		
		return map;
		}


	// 1:1 문의 목록 조회
	@Override
	public Map<String, Object> selectInquiryList(int cp) {
		
		int listCount = dao.getInquiryListCount();
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Inquiry> InquiryList = dao.selectInquiryList(pagination);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("inquiryList", InquiryList);
		
		return map;
	}
	
	// 검색된 1:1 문의 목록 조회
	@Override
	public Map<String, Object> selectInquiryList(Map<String, Object> paramMap, int cp) {
	
		int listCount = dao.getInquiryListCount(paramMap);
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Inquiry> InquiryList = dao.selectInquiryList(pagination,paramMap);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("inquiryList", InquiryList);
		
		return map;
	}

	// 신고함 목록 조회
	@Override
	public Map<String, Object> selectDeclarationList(int cp) {
		
		int listCount = dao.getDeclarationListCount();
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Declaration> DeclarationList = dao.selectDeclarationList(pagination);
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
		map.put("DeclarationList", DeclarationList);
		
		return map;
	}
	
	// 검색된 신고함 목록 조회
	@Override
	public Map<String, Object> selectDeclarationList(int cp, Map<String, Object> paramMap) {
		
		int listCount = dao.getDeclarationListCount(paramMap);
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Declaration> DeclarationList = dao.selectDeclarationList(pagination,paramMap);
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("pagination", pagination);
		map.put("DeclarationList", DeclarationList);
		
		return map;
	}


	// 체크된 회원 탈퇴
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int deleteId(int boardNo) {
		
		return dao.deleteId(boardNo);
	}

	// 체크된 탈퇴한 회원 복구
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int restoreId(int boardNo) {
		
		return dao.restoreId(boardNo);
	}

	// 체크된 게시글 삭제
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int deletePost(int boardNo) {
		
		return dao.deletePost(boardNo);
	}

	// 체크된 게시글 복구
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int restorePost(int boardNo) {
		
		return dao.restorePost(boardNo);
	}

	// 체크된 댓글 삭제
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int commentdel(int commentNo) {
		
		return dao.commentdel(commentNo);
	}

	// 체크된 댓글 복구
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int commentRe(int commentNo) {
		
		return dao.commentRe(commentNo);
	}

	
	
	
}
