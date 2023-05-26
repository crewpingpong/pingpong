package com.pingpong.project.mypage.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.Interests;
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
	public List<Tech> selectCheckTechList(int memberNo) {
		return sqlSession.selectList("mypageMapper.selectCheckTechList", memberNo);
	}
	
	/** 선택된 지식/기술 한개씩 삽입
	 * @param t
	 * @return
	 */
	public int insertNewTechList(Map<String, Object> techMap) {
		return sqlSession.insert("mypageMapper.insertNewTechList", techMap);
	}

	/**
	 * 지식/기술 삽입 전 전체 삭제
	 * 
	 * @param memberNo
	 * @return
	 */
	public int techListDeleteAll(int memberNo) {
		return sqlSession.delete("mypageMapper.techListDeleteAll", memberNo);
	}

	/**
	 * 선택한 techImgList 조회
	 * 
	 * @param memberNo
	 * @return List
	 */
	public List<Tech> seletCheckTechImgList(int memberNo) {
		return sqlSession.selectList("mypageMapper.seletCheckTechImgList", memberNo);
	}

	
	
	
	
	

	/** 전체 관심분야 리스트 조회
	 * @return
	 */
	public List<Interests> selectInterestList() {
		return sqlSession.selectList("mypageMapper.selectInterestList");
	}
	
	/** 선택한 interestList 조회
	 * @param memberNo
	 * @return
	 */
	public List<Interests> selectCheckInterestList(int memberNo) {
		return sqlSession.selectList("mypageMapper.seletCheckInterestList", memberNo);
	}
	
	/** 체크된 interestList 삽입
	 * @param interestMap
	 * @return
	 */
	public int insertNewInterestList(Map<String, Object> interestMap) {
		return sqlSession.insert("mypageMapper.insertNewInterestList", interestMap);
	}
	
	/** 체크 해제된 interestList 한개씩 삭제
	 * @param memberNo
	 * @return
	 */
	public int interestListDeleteAll(int memberNo) {
		return sqlSession.delete("mypageMapper.interestListDeleteAll", memberNo);
	}
	
	
	
	
	
	

	/** 전체 SNS 리스트 조회
	 * @return
	 */
	public List<SNS> selectSNSList() {
		return sqlSession.selectList("mypageMapper.selectSNSList");
	}
	
	/** 선택한 SNSList 조회
	 * @param memberNo
	 * @return
	 */
	public List<SNS> seletCheckSNSList(int memberNo) {
		return sqlSession.selectList("mypageMapper.seletCheckSNSList", memberNo);
	}

	/** 선택된 SNSList 삽입
	 * @param s
	 * @return
	 */
	public int insertNewSnsList(SNS s) {
		return sqlSession.insert("mypageMapper.insertNewSnsList", s);
	}

	/** SNSList 전체 삭제 후 SNSList 삽입 진행
	 * @param memberNo
	 * @return
	 */
	public int snsListDeleteAll(int memberNo) {
		return sqlSession.delete("mypageMapper.snsListDeleteAll", memberNo);
	}

	/** 선택한 snsImgList 조회
	 * @param memberNo
	 * @return
	 */
	public List<SNS> selectCheckSNSImgList(int memberNo) {
		return sqlSession.selectList("mypageMapper.selectCheckSNSImgList", memberNo);
	}

	/** snsURL COUNT
	 * @param memberNo
	 * @return
	 */
	public int selectSNSAddress(int memberNo) {
		return sqlSession.selectOne("mypageMapper.selectSNSAddress", memberNo);
	}

	/** snsURL UPDATE
	 * @param selectedSnsAddress
	 * @return
	 */
	public int updateSNSAddress(Map<String, Object> snsAddressMap) {
		return sqlSession.update("mypageMapper.updateSNSAddress", snsAddressMap);
	}

	/** snsURL INSERT
	 * @param snsAddressMap
	 * @return
	 */
	public int insertSNSAddress(Map<String, Object> snsAddressMap) {
		return sqlSession.insert("mypageMapper.insertSNSAddress", snsAddressMap);
	}

	/** 선택한 snsList의 URL 주소 (링크)
	 * @param memberNo
	 * @return
	 */
	public List<SNS> selectSNSAddressList(int memberNo) {
		return sqlSession.selectList("mypageMapper.selectSNSAddressList", memberNo);
	}

	/** 프로필 이미지 기본
	 * @param memberNo
	 * @return
	 */
	public int updateBasicProfile(int memberNo) {
		return sqlSession.update("mypageMapper.updateBasicProfile", memberNo);
	}

	/**
	 * @param map
	 * @return
	 */
	public int profileInsert(Map<String, Object> map) {
		return sqlSession.insert("mypageMapper.profileInsert", map);
	}
	
	
	
	





}