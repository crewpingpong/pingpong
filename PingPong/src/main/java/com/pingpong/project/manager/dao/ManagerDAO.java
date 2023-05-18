package com.pingpong.project.manager.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.member.model.dto.Member;

@Repository
public class ManagerDAO {

	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 관리자 페이지 가입 회원 목록 조회
	 * @return memberList
	 */
	public List<Member> selectMemberList() {
		
		return sqlSession.selectList("managerMapper.selectMemberList");
	}

	/** 관리자 페이지 탈퇴 회원 목록 조회
	 * @return memberList
	 */
	public List<Member> selectSessionList() {
		
		return sqlSession.selectList("managerMapper.selectSecessionList");
	}

	/** 관리자 페이지 게시글 목록 조회
	 * @return boardList
	 */
	public List<Board> selectBoardList() {
		
		return sqlSession.selectList("managerMapper.selectBoardList");
	}

	/** 관리자 페이지 댓글 목록 조회
	 * @return CommentList
	 */
	public List<Comment> selectCommentList() {

		return sqlSession.selectList("managerMapper.selectCommentList");
	}

	/** 관리자 페이지 1:1 문의 목록 조회
	 * @return InquiryList
	 */
	public List<Inquiry> selectInquiryList() {
		return sqlSession.selectList("managerMapper.selectInquiryList");
	}

	/** 관리자 페이지 신고함 목록 조회
	 * @return DeclarationList
	 */
	public List<Declaration> selectDeclarationList() {
		return sqlSession.selectList("managerMapper.selectDeclarationList");
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
	
}
