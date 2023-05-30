package com.pingpong.project.common;

import org.springframework.ui.Model;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

// 예외 처리용 컨트롤러 
@ControllerAdvice
public class Exceptioncontroller {
//	최근태
	@ExceptionHandler(ServletRequestBindingException.class)
    public String handleServletRequestBindingException() {
//		e.printStackTrace(); // 예외 내용/발생 메서드 확인
		System.out.println("비 로그인 에러");
        return "redirect:/member/login";
    }
	
	@ExceptionHandler(Exception.class)
	public String exceptionHandler(Exception e, Model model) {
		
		// Exception e : 예외 정보를 담고 있는 객체
		// Model model : 데이터 전달용 객체 (request scope가 기본)
		
		e.printStackTrace(); // 예외 내용/발생 메서드 확인
		
		model.addAttribute("e", e);
		
		// forward 진행 -> View Resolver의 prefix, suffix를 붙여 JSP 경로로 만듦
		return "common/error";
	}
}
