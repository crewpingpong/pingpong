package com.pingpong.project.manager.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.board.model.dto.Pagination;
import com.pingpong.project.member.model.dto.Member;

@Repository
public class ManagerDAO {

	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** DEL_FL이 'N'인 회원 조회 카운트
	 * @return listCount
	 */
	public int getListCount() {
		return sqlSession.selectOne("managerMapper.getListCount");
	}
	
	
	/** DEL_FL이 'Y'인 회원 조회 카운트 
	 * @return
	 */
	public int getDelListCount() {
		return sqlSession.selectOne("managerMapper.getDelListCount");
	}
	
	/** 검색된 회원 목록 조회 카운트
	 * @param paramMap
	 * @return 
	 */
	public int getMemberListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getMemberCount_search", paramMap);
	}
	
	/** 검색된 탈퇴 회원 목록 조회 카운트
	 * @param paramMap
	 * @return
	 */
	public int getDelListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getDelListCount_search",paramMap);
	}
	
	/** 검색한 게시글 목록 조회 카운트
	 * @param paramMap
	 * @return
	 */
	public int getContentListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getContentListCount_search",paramMap);
	}
	
	/** 검색된 댓글 목록 카운트
	 * @param paramMap
	 * @return
	 */
	public int getCommentListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getCommentListCount_search",paramMap);
	}
	
	/** 검색된 1:1 문의 목록 카운트
	 * @param paramMap
	 * @return
	 */
	public int getInquiryListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getInquiryListCount_search",paramMap);
	}
	
	/** 검색된 신고함 목록 카운트
	 * @param paramMap
	 * @return
	 */
	public int getDeclarationListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("managerMapper.getDeclarationListCount_search",paramMap);
	}
	
	/** 관리자 페이지 가입 회원 목록 조회
	 * @return memberList
	 */
	public List<Member> selectMemberList(Pagination pagination) {
		
		// RowBounds 객체
		// - 마이바티스에서 페이징처리를 위해 제공하는 객체
		// - offset 만큼 건너 뛰고 
		//   그 다음 지정된 행 개수(limit) 만큼 조회
		
		// 1) offset 계산
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		// 2) Rowbounds 객체 생성
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectMemberList",rowBounds);
	}
	
	/** 검색된 가입 회원 목록 조회
	 * @param pagination
	 * @param paramMap
	 * @return 
	 */
	public List<Member> selectMemberList(Pagination pagination, Map<String, Object> paramMap) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectMemberList_search", paramMap, rowBounds);
	}
	

	/** 관리자 페이지 탈퇴 회원 목록 조회
	 * @param pagination 
	 * @return memberList
	 */
	public List<Member> selectSecessionList(Pagination pagination) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectSecessionList",rowBounds);
	}

	/** 탈퇴한 회원 목록 조회 (검색)
	 * @param pagination
	 * @param paramMap
	 * @return
	 */
	public List<Member> selectSecessionList(Pagination pagination, Map<String, Object> paramMap) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectSecessionList_search",paramMap, rowBounds);
	}
	
	
	// 게시글 목록 갯수 카운트
	public int getContentListCount() {
		return sqlSession.selectOne("managerMapper.getContentListCount");
	}
	
	
	/** 관리자 페이지 게시글 목록 조회
	 * @return boardList
	 */
	public List<Board> selectBoardList(Pagination pagination) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectBoardList",rowBounds);
	}

	/** 검색한 게시글 목록 조회
	 * @param pagination
	 * @param paramMap
	 * @return
	 */
	public List<Board> selectBoardList(Pagination pagination, Map<String, Object> paramMap) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectBoardList_search",paramMap, rowBounds);
	}
	
	// 댓글 목록 카운트 조회
		public int getCommentListCount() {
			return sqlSession.selectOne("managerMapper.getCommentListCount");
		}
	
	/** 관리자 페이지 댓글 목록 조회
	 * @return CommentList
	 */
	public List<Comment> selectCommentList(Pagination pagination) {

		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectCommentList",rowBounds);
	}
	

	/** 검색된 댓글 목록 조회
	 * @param pagination
	 * @param paramMap
	 * @return
	 */
	public List<Comment> selectCommentList(Pagination pagination, Map<String, Object> paramMap) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectCommentList_search",paramMap,rowBounds);
	}
	
	// 1:1 문의 목록 조회
	public int getInquiryListCount() {
		return sqlSession.selectOne("managerMapper.getInquiryListCount");
	}
	

	/** 관리자 페이지 1:1 문의 목록 조회
	 * @param pagination 
	 * @return InquiryList
	 */
	public List<Inquiry> selectInquiryList(Pagination pagination) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectInquiryList",rowBounds);
	}

	/** 검색된 1:1 문의 목록 조회
	 * @param pagination
	 * @param paramMap
	 * @return
	 */
	public List<Inquiry> selectInquiryList(Pagination pagination, Map<String, Object> paramMap) {

		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectInquiryList_search",paramMap,rowBounds);
	}
	
	// 신고함 목록 카운트 조회
		public int getDeclarationListCount() {
			return sqlSession.selectOne("managerMapper.getDeclarationListCount");
		}
	
	/** 관리자 페이지 신고함 목록 조회
	 * @return DeclarationList
	 */
	public List<Declaration> selectDeclarationList(Pagination pagination) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectDeclarationList",rowBounds);
	}
	
	/** 검색된 신고함 목록 조회
	 * @param pagination
	 * @param paramMap
	 * @return
	 */
	public List<Declaration> selectDeclarationList(Pagination pagination, Map<String, Object> paramMap) {
	
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("managerMapper.selectDeclarationList_search",paramMap,rowBounds);
	}

	/** 체크된 회원 탈퇴
	 * @param boardNo
	 * @return 
	 */
	public int deleteId(int boardNo) {
		return sqlSession.update("managerMapper.updateId",boardNo);
	}

	/** 체크된 탈퇴 회원 복구
	 * @param boardNo
	 * @return
	 */
	public int restoreId(int boardNo) {
		
		return sqlSession.update("managerMapper.restoreId",boardNo);
	}

	/** 체크된 게시글 삭제
	 * @param boardNo
	 * @return
	 */
	public int deletePost(int boardNo) {
		
		return sqlSession.update("managerMapper.deletePost",boardNo);
	}

	/** 체크된 게시글 복구
	 * @param boardNo
	 * @return
	 */
	public int restorePost(int boardNo) {
		
		return sqlSession.update("managerMapper.restorePost",boardNo);
	}

	/** 체크된 댓글 삭제
	 * @param boardNo
	 * @return
	 */
	public int commentdel(int commentNo) {

		return sqlSession.update("managerMapper.commentdel",commentNo);
	}

	/** 체크된 댓글 복구
	 * @param commentNo
	 * @return
	 */
	public int commentRe(int commentNo) {
		return sqlSession.update("managerMapper.commentRe",commentNo);
	}



	
	
}
