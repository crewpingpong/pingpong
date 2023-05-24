package com.pingpong.project.mypage.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.Interest;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.dto.SNS;
import com.pingpong.project.mypage.model.dto.Tech;

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

	/** 지식기술 조회
	 * @param memberNo
	 * @return
	 */
//	public List<Member> selectTechList(int memberNo) {
//		return sqlSession.selectList("mypageMapper.selectTechList", memberNo);
//	}

	/** 프로필 정보 수정
	 * @param updateMember
	 * @return
	 */
	public int updateProfileInfo(MyPage updateMyPage) {
		return sqlSession.update("mypageMapper.updateProfileInfo", updateMyPage);
	}

	
	
	
	
	/** 전체 지식/기술 리스트 조회
	 * @return
	 */
	public List<Tech> selectTechList() {
		return sqlSession.selectList("mypageMapper.selectTechList");
	}
	
	/** 선택된 techList 조회
	 * @return
	 */
	public List<Tech> seletCheckTechList(int memberNo) {
		return sqlSession.selectList("mypageMapper.seletCheckTechList", memberNo);
	}
	
	/** 선택된 지식/기술 한개씩 삽입
	 * @param t
	 * @return
	 */
	public int insertNewTechList(Map<String, Object> techMap) {
		return sqlSession.insert("mypageMapper.insertNewTechList", techMap);
	}
	
	/** 지식/기술 삽입 전 전체 삭제
	 * @param memberNo
	 * @return
	 */
	public int techListDeleteAll(int memberNo) {
		return sqlSession.delete("mypageMapper.techListDeleteAll", memberNo);
	}
	
	/** 체크 해제된 지식/기술 한개씩 삭제
	 * @param techMap
	 * @return
	 */
	public int deleteNewTechList(Map<String, Object> techMap) {
		return sqlSession.delete("mypageMapper.deleteNewTechList", techMap);
	}

	
	
	
	
	
	

	/** 선택된 지식기술 리스트 삽입
	 * @param techList
	 * @return
	 */
	public int insertTechList(List<String> selectedtechList) {
		return sqlSession.insert("mypageMapper.insertTechList", selectedtechList);
	}

	/** 선택된 지식기술 리스트 조회
	 * @param selectedTech
	 * @return
	 */
	public int selectTechCount(List<String> selectedtechList) {
		return sqlSession.selectOne("mypageMapper.selectTechCount", selectedtechList);
	}

	/** 전체 관심분야 리스트 조회
	 * @return
	 */
	public List<Interest> selectInterestList() {
		return sqlSession.selectList("mypageMapper.selectInterestList");
	}

	/** 전체 SNS 리스트 조회
	 * @return
	 */
	public List<SNS> selectSNSList() {
		return sqlSession.selectList("mypageMapper.selectSNSList");
	}

	
	/** 선택한 techImgList 조회
	 * @param memberNo
	 * @return List
	 */
	public List<Tech> seletCheckTechImgList(int memberNo) {
		return sqlSession.selectList("mypageMapper.seletCheckTechImgList", memberNo);
	}









}