package com.pingpong.project.message.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.message.model.dto.Message;

@Repository
public class MessageDAO {
	
	@Autowired
	private SqlSessionTemplate sqlsession;

	// 받은 메세지 조회
	public List<Message> messageList(int memberNo) {
		return sqlsession.selectList("messageMapper.messageList",memberNo);
	}
	
	// 보낸 메세지 조회
	public List<Message> sendmessageList(int memberNo) {
		return sqlsession.selectList("messageMapper.sendmessageList",memberNo);
	}

	// 답장 보내기
	public int resendMessage(Message message) {
		return sqlsession.insert("messageMapper.resendMessage", message);
	}

//	// 받은 메세지 삭제
//	public int delmessage(int delNo) {
//		return sqlsession.update("messageMapper.delmessage",delNo);
//	}
//	
//	// 보낸 메세지 삭제
//	public int delSendmessage(int delNo) {
//		return sqlsession.update("messageMapper.delSendmessage",delNo);
//	}
	
}
