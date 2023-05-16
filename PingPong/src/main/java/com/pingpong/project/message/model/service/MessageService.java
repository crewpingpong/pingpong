package com.pingpong.project.message.model.service;

import java.util.List;

import com.pingpong.project.message.model.dto.Message;

public interface MessageService {

	/** 받은 메세지 불러오기
	 * @return
	 */
	List<Message> messageList(int memberNo);

	/** 보낸 메세지 불러오기
	 * @param memberNo
	 * @return
	 */
	List<Message> sendmessageList(int memberNo);
}
