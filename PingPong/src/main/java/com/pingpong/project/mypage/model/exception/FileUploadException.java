package com.pingpong.project.mypage.model.exception;

public class FileUploadException extends RuntimeException {
	
	public FileUploadException() {
		super("파일 업로드 중 예외 발생");
	}

}
