package com.pingpong.project.message.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.message.model.dto.Follow;
import com.pingpong.project.message.model.dto.Notice;

@Repository
public class AlarmDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 알람 메세지를 보낸 사람의 프로필 이미지 조회
	 * @param sendNo
	 * @return
	 */
	public String selectProfileImage(int sendNo) {
		return sqlSession.selectOne("alarmMapper.selectProfileImage",sendNo);
	}

	/** 알람을 받는 사람 번호(== 게시글 작성) 
	 * @param boardNo
	 * @return
	 */
	public int selectMemberNo(int boardNo) {
		return sqlSession.selectOne("alarmMapper.selectMemberNo",boardNo);
	}

	
	/** 알람 삽입 
	 * @param notice
	 * @return
	 */
	public int insertAlarm(Notice notice) {
		return sqlSession.insert("alarmMapper.insertAlarm",notice);
	}
	
	/** 팔로우 여부
	 * @param follow
	 * @return
	 */
	public int followCheck(Follow follow) {
		return sqlSession.selectOne("alarmMapper.followCheck",follow);
	}
	

	/** 팔로우 삽입
	 * @param follow
	 * @return
	 */
	public int follow(Follow follow) {
		return sqlSession.insert("alarmMapper.follow", follow);
	}


	
	/** 팔로우 삭제
	 * @param follow
	 * @return
	 */
	public int unfollow(Follow follow) {
		return sqlSession.delete("alarmMapper.unfollow",follow);
	}
	
}
