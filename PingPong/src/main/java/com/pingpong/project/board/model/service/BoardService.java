package com.pingpong.project.board.model.service;


import java.util.List;
import java.util.Map;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Hashtag;


public interface BoardService {

	/** 게시글 상세 조회
	 * @param boardCode
	 * @return board
	 */
//	Board selectBoard(int boardCode);

	/** 좋아요 여부 확인
	 * @param map
	 * @return result
	 */
//	int boardLikeCheck(Map<String, Object> map);

	/** 게시글 상세 조회 (AJAX)
	 * @param boardNo
	 * @return board
	 */
	Board select(int boardNo);
	
    /** 좋아요 처리 서비스 (AJAX)
     * @param paramMap
     * @return count
     */
    int like(Map<String, Integer> paramMap);

	/** 북마크 처리 서비스 (AJAX)
	 * @param paramMap
	 * @return count
	 */
    int boardMarkup(Map<String, Integer> paramMap);

	/** 댓글 달기 서비스 (AJAX)
	 * @param paramMap
	 * @return result
	 */
    Comment commentInsert(Comment comment);

	/** 게시글 수정 서비스 (AJAX)
	 * @param paramMap
	 * @return result
	 */
	int boardEditing(Map<String, Object> paramMap);

	/** 해시태그 리스트 반환
	 * @param hashtags
	 * @return hashtagList
	 */
	List<Hashtag> getHashtags(Map<String, String> hashtags);

	/** 댓글 삭제
	 * @param commentNo
	 * @return result
	 */
	int commentDelete(int commentNo);

	/** 댓댓글 삭제
	 * @param commentNo
	 * @return result
	 */
	int childCommentDelete(int commentNo);

}
