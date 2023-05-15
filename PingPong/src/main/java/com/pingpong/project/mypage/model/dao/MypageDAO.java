package com.pingpong.project.mypage.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
	
	/** 배경화면 수정
	 * @param map
	 * @return result
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

	/** 회원 프로필 가져오기
	 * @param memberNo
	 * @return memberProfile
	 */
	public MyPage selectMemberProfile(int memberNo) {
		System.out.println("DAO");
		MyPage self = sqlSession.selectOne("mypageMapper.selectMemberProfile", memberNo);
		System.out.println(self);
		System.out.println(self.getBackgroundImage());
		return self;
	}

}