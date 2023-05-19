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

	/** 답장 하기
	 * @param message
	 * @return
	 */
	int resendMessage(Message message);


	/** 받은 메세지 삭제
	 * @param delNo
	 * @return
	 */
	int delmessage(int delNo);
	
	/** 보낸 메세지 삭제
	 * @param delNo
	 * @return
	 */
	int delSendmessage(int delNo);




	/** 메세지 보내기
	 * @param message
	 * @return
	 */
	int sendMessage(Message message);

	
	
}
