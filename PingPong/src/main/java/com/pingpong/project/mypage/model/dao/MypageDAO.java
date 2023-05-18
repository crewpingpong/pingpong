package com.pingpong.project.mypage.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.MyPage;

@Repository
public class MypageDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 회원 정보 수정 DAO
	 * @param updateMember
	 * @return result
	 */
	public int updateInfo(Member updateMember) {
		return sqlSession.update("mypageMapper.updateInfo", updateMember);
	}

	/** 회원 비밀번호 조회
	 * @param memberNo
	 * @return encPw
	 */
	public String selectEncPw(int memberNo) {
		return sqlSession.selectOne("mypageMapper.selectEncPw", memberNo);
	}
	
	/** 비밀번호 변경
	 * @param newPw
	 * @param memberNo
	 * @return result
	 */
	public int changePw(String newPw, int memberNo) {		
		Member member = new Member();
		member.setMemberNo(memberNo);
		member.setMemberPw(newPw);
		
		return sqlSession.update("mypageMapper.changePw", member);
	}
	
	/** 회원 탈퇴 
	 * @param memberNo
	 * @return result
	 */
	public int secession(int memberNo) {
		return sqlSession.update("mypageMapper.secession", memberNo);
	}
	

	/** 프로필 이미지 수정
	 * @param map
	 * @return result
	 */
	public int updateProfile(Map<String, Object> map) {
		return sqlSession.update("mypageMapper.updateProfileImage", map);
	}

	/** 배경 이미지 수정
	 * @param map
	 * @return
	 */
	public int backgroundUpdate(Map<String, Object> map) {
		return sqlSession.update("mypageMapper.backgroundUpdate", map);
	}
	
	/** 배경화면 삽입
	 * @param map
	 * @return result
	 */
	public int backgroundInsert(Map<String, Object> map) {
		return sqlSession.insert("mypageMapper.backgroundInsert", map);
	}

	/** 게시글 조회
	 * @param memberNo
	 * @return boardList
	 */
	public List<Board> selectBoardList(int memberNo) {
		
		return sqlSession.selectList("boardMapper.selectBoardList", memberNo);
	}

	/** 회원 정보 조회
	 * @param memberNo
	 * @return myPage
	 */
	public MyPage selectMemberProfile(int memberNo) {
		return sqlSession.selectOne("mypageMapper.selectMemberProfile", memberNo);
	}

	/** 북마크한 게시글 조회 
	 * @param memberNo
	 * @return boardMarkList
	 */
	public List<Board> selectBoardMarkList(int memberNo) {
		return sqlSession.selectList("boardMapper.selectBoardMarkList", memberNo);
	}

	/** 좋아요한 게시글 조회
	 * @param memberNo
	 * @return boardLikeList
	 */
	public List<Board> selectBoardLikeList(int memberNo) {
		return sqlSession.selectList("boardMapper.selectBoardLikeList", memberNo);
	}


}