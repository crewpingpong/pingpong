package com.pingpong.project.message.dao;

import java.util.List;
import java.util.Map;

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
	
	/** 최근 알람 20개 조회
	 * @param memberNo
	 * @return
	 */
	public List<Notice> alarmList(int memberNo) {
		return sqlSession.selectList("alarmMapper.alarmList",memberNo);
	}


	/** 팔로우 여부
	 * @param follow
	 * @return
	 */
	public int followCheck(Map<String, Integer> follow) {
		return sqlSession.selectOne("alarmMapper.followCheck",follow);
	}

	/** 내가 팔로우 하는 사람들
	 * @param follow
	 * @return
	 */
	public List<Follow> myfollowList(int followerNo) {
		return sqlSession.selectList("alarmMapper.myfollowList",followerNo);
	}

	/** 내가 팔로우 하는 사람들 수 조회
	 * @param memberNo
	 * @return
	 */
	public int myFollowCount(int memberNo) {
		return sqlSession.selectOne("alarmMapper.myFollowCount",memberNo);
	}
	
	/** 나를 팔로우 하는 사람들
	 * @param follow
	 * @return
	 */
	public List<Follow> mefollowList(int followerNo) {
		return sqlSession.selectList("alarmMapper.mefollowList",followerNo);
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
	
	/** 팔로우 삭제
	 * @param follow
	 * @return
	 */
	public int unfollow2(Follow follow) {
		return sqlSession.delete("alarmMapper.unfollow2",follow);
	}






	
}
