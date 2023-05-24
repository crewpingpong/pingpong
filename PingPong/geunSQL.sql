DROP TABLE "MEMBER";

CREATE TABLE "MEMBER" (
	"MEMBER_NO"	NUMBER		NOT NULL,
	"MEMBER_EMAIL"	VARCHAR2(50)		NOT NULL,
	"MEMBER_PW"	VARCHAR2(100)		NOT NULL,
	"MEMBER_NICKNAME"	VARCHAR2(30)		NOT NULL,
	"MEMBER_URL"	VARCHAR2(50)		NOT NULL,
	"ENROLL_DATE"	DATE	DEFAULT SYSDATE	NOT NULL,
	"MEMBER_DEL_FL"	CHAR(1)	DEFAULT 'N'	NOT NULL,
	"AUTHORITY"	NUMBER	DEFAULT 1	NOT NULL
);

COMMENT ON COLUMN "MEMBER"."MEMBER_NO" IS '회원번호(SEQ_MEMBER_NO)';

COMMENT ON COLUMN "MEMBER"."MEMBER_EMAIL" IS '회원 이메일(중복 허용X)';

COMMENT ON COLUMN "MEMBER"."MEMBER_PW" IS '회원 비밀번호(암호화 적용)';

COMMENT ON COLUMN "MEMBER"."MEMBER_NICKNAME" IS '회원 닉네임(중복허용)';

COMMENT ON COLUMN "MEMBER"."MEMBER_URL" IS '회원 URL(중복허용X)';

COMMENT ON COLUMN "MEMBER"."ENROLL_DATE" IS '회원 가입일';

COMMENT ON COLUMN "MEMBER"."MEMBER_DEL_FL" IS '탈퇴여부(N:탈퇴X, Y:탈퇴O)';

COMMENT ON COLUMN "MEMBER"."AUTHORITY" IS '회원권한(1:회원, 2:관리자, 0:제한)';

DROP TABLE "BOARD";

CREATE TABLE "BOARD" (
	"BOARD_NO"	NUMBER		NOT NULL,
	"BOARD_CONTENT"	VARCHAR2(3000)		NOT NULL,
	"BOARD_DATE"	DATE	DEFAULT SYSDATE	NOT NULL,
	"BOARD_DEL_FL"	CHAR(1)	DEFAULT 'N'	NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "BOARD"."BOARD_NO" IS '게시글 번호(SEQ_BOARD_NO)';

COMMENT ON COLUMN "BOARD"."BOARD_CONTENT" IS '게시글 내용';

COMMENT ON COLUMN "BOARD"."BOARD_DATE" IS '게시글 작성일';

COMMENT ON COLUMN "BOARD"."BOARD_DEL_FL" IS '삭제여부(N:삭제X, Y:삭제O)';

COMMENT ON COLUMN "BOARD"."MEMBER_NO" IS '회원번호';

DROP TABLE "FOLLOW";

CREATE TABLE "FOLLOW" (
	"FOLLOW_NO"	NUMBER		NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"FOLLOWER_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "FOLLOW"."FOLLOW_NO" IS '팔로우 번호(SEQ_FOLLOW_NO_NO)';

COMMENT ON COLUMN "FOLLOW"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "FOLLOW"."FOLLOWER_NO" IS '팔로우한 사람';

DROP TABLE "MEMBER_INTERESTS";

CREATE TABLE "MEMBER_INTERESTS" (
	"INTERESTS_MEMBER_NO"	NUMBER		NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"INTERESTS_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "MEMBER_INTERESTS"."INTERESTS_MEMBER_NO" IS '회원의 관심분야 번호(SEQ_INERESTS_MEMBER_NO_NO)';

COMMENT ON COLUMN "MEMBER_INTERESTS"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "MEMBER_INTERESTS"."INTERESTS_NO" IS '관심분야 번호';

DROP TABLE "COMMENT";

CREATE TABLE "COMMENT" (
	"COMMENT_NO"	NUMBER		NOT NULL,
	"COMMENT_CONTENT"	VARCHAR2(1000)		NOT NULL,
	"COMMENT_DATE"	DATE		NOT NULL,
	"COMMENT_MEMBER_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "COMMENT"."COMMENT_NO" IS '댓글 번호(SEQ_COMMENT_NO)';

COMMENT ON COLUMN "COMMENT"."COMMENT_CONTENT" IS '댓글 내용';

COMMENT ON COLUMN "COMMENT"."COMMENT_DATE" IS '댓글 작성일';

COMMENT ON COLUMN "COMMENT"."COMMENT_MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "COMMENT"."BOARD_NO" IS '게시글 번호';

DROP TABLE "DECLARATION";

CREATE TABLE "DECLARATION" (
	"INDICTMENT_NO"	NUMBER		NOT NULL,
	"INDICTMENT_CONTENT"	VARCHAR2(1000)		NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "DECLARATION"."INDICTMENT_NO" IS '신고 번호(SEQ_REPORT_NO)';

COMMENT ON COLUMN "DECLARATION"."INDICTMENT_CONTENT" IS '신고내용';

COMMENT ON COLUMN "DECLARATION"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "DECLARATION"."BOARD_NO" IS '게시글 번호';

DROP TABLE "NOTICE";

CREATE TABLE "NOTICE" (
	"NOTICE_NO"	NUMBER		NOT NULL,
	"NOTICE_COMENT"	VARCHAR2(1000)		NOT NULL,
	"ELAPSED_TIME"	DATE	DEFAULT SYSDATE	NOT NULL,
	"MEMBER_NO"	NUMBER		NULL
);

COMMENT ON COLUMN "NOTICE"."NOTICE_NO" IS '알림 번호(SEQ_NOTICE_NO)';

COMMENT ON COLUMN "NOTICE"."NOTICE_COMENT" IS '알림 내용';

COMMENT ON COLUMN "NOTICE"."ELAPSED_TIME" IS '받은 시간';

COMMENT ON COLUMN "NOTICE"."MEMBER_NO" IS '회원번호';

DROP TABLE "SEARCHES";

CREATE TABLE "SEARCHES" (
	"SEARCH_NO"	NUMBER		NOT NULL,
	"SEARCH_COUNT"	NUMBER	DEFAULT 1	NOT NULL,
	"TYPE"	CHAR(1)	DEFAULT 0	NOT NULL
);

COMMENT ON COLUMN "SEARCHES"."SEARCH_NO" IS '최근검색어번호(SEQ_NUMBER_NO)';

COMMENT ON COLUMN "SEARCHES"."SEARCH_COUNT" IS '검색 횟수';

COMMENT ON COLUMN "SEARCHES"."TYPE" IS '타입(0:해시태그X, 1:해시태그O)';

DROP TABLE "MESSAGE";

CREATE TABLE "MESSAGE" (
	"MESSAGE_NO"	NUMBER		NOT NULL,
	"MESSAGE_CONTENT"	VARCHAR2(3000)		NOT NULL,
	"SEND_DATE"	DATE	DEFAULT SYSDATE	NOT NULL,
	"SEND_MEMBER"	NUMBER		NOT NULL,
	"RECEIVED_MEMBER"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "MESSAGE"."MESSAGE_NO" IS '메시지 번호(SEQ_MESSAGE_NO)';

COMMENT ON COLUMN "MESSAGE"."MESSAGE_CONTENT" IS '메시지 내용';

COMMENT ON COLUMN "MESSAGE"."SEND_DATE" IS '메시지 보낸 날짜';

COMMENT ON COLUMN "MESSAGE"."SEND_MEMBER" IS '메시지 보낸 회원번호';

COMMENT ON COLUMN "MESSAGE"."RECEIVED_MEMBER" IS '메시지 받은 회원번호';

DROP TABLE "CAREER";

CREATE TABLE "CAREER" (
	"CERTIFICATE_NO"	NUMBER		NOT NULL,
	"MEMBER_CERT"	VARCHAR2(1000)		NOT NULL
);

COMMENT ON COLUMN "CAREER"."CERTIFICATE_NO" IS '자격증 번호';

COMMENT ON COLUMN "CAREER"."MEMBER_CERT" IS '자격증 이미지 경로';

DROP TABLE "LIKE";

CREATE TABLE "LIKE" (
	"MEMBER_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "LIKE"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "LIKE"."BOARD_NO" IS '게시글 번호';

DROP TABLE "HASHTAG";

CREATE TABLE "HASHTAG" (
	"HASH_NO"	NUMBER		NOT NULL,
	"HASHTAG_NAME"	VARCHAR2(50)		NOT NULL
);

COMMENT ON COLUMN "HASHTAG"."HASH_NO" IS '태그번호(SEQ_TAG_NO)';

COMMENT ON COLUMN "HASHTAG"."HASHTAG_NAME" IS '해시태그 이름';

DROP TABLE "INQUIRY";

CREATE TABLE "INQUIRY" (
	"INQUIRY_NO"	NUMBER		NOT NULL,
	"INQUIRY_EMAIL"	VARCHAR2(100)		NOT NULL,
	"INQUIRY_CONTENT"	VARCHAR2(3000)		NOT NULL,
	"INQUIRY_IMAGE"	VARCHAR2(300)		NULL,
	"MEMBER_NO"	NUMBER		NULL
);

COMMENT ON COLUMN "INQUIRY"."INQUIRY_NO" IS '문의번호(SEQ_INQUIRY_NO)';

COMMENT ON COLUMN "INQUIRY"."INQUIRY_EMAIL" IS '문의 이메일';

COMMENT ON COLUMN "INQUIRY"."INQUIRY_CONTENT" IS '문의 내용';

COMMENT ON COLUMN "INQUIRY"."INQUIRY_IMAGE" IS '문의 첨부 파일 경로';

COMMENT ON COLUMN "INQUIRY"."MEMBER_NO" IS '회원번호';

DROP TABLE "MEMBER_PROFILE";

CREATE TABLE "MEMBER_PROFILE" (
	"MEMBER_NO"	NUMBER		NOT NULL,
	"PROFILE_IMG"	VARCHAR2(300)		NULL,
	"BACKGROUND_IMG"	VARCHAR2(300)		NULL,
	"MEMBER_INFO"	VARCHAR2(1000)		NULL,
	"MEBMER_CAREER"	VARCHAR2(500)		NULL,
	"MEMBER_TECH"	VARCHAR2(500)		NULL,
	"CERTIFICATE_NO"	NUMBER		NULL
);

COMMENT ON COLUMN "MEMBER_PROFILE"."MEMBER_NO" IS '회원번호(SEQ_MEMBER_NO)';

COMMENT ON COLUMN "MEMBER_PROFILE"."PROFILE_IMG" IS '프로필 이미지 저장 경로';

COMMENT ON COLUMN "MEMBER_PROFILE"."BACKGROUND_IMG" IS '배경 이미지 저장 경로';

COMMENT ON COLUMN "MEMBER_PROFILE"."MEMBER_INFO" IS '소개글';

COMMENT ON COLUMN "MEMBER_PROFILE"."MEBMER_CAREER" IS '커리어';

COMMENT ON COLUMN "MEMBER_PROFILE"."MEMBER_TECH" IS '지식 기술';

COMMENT ON COLUMN "MEMBER_PROFILE"."CERTIFICATE_NO" IS '자격증 번호';

DROP TABLE "BOARD_IMG";

CREATE TABLE "BOARD_IMG" (
	"IMG_NO"	NUMBER		NOT NULL,
	"IMG_ORDER"	NUMBER		NOT NULL,
	"IMG_ADDRESS"	VARCHAR2(300)		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "BOARD_IMG"."IMG_NO" IS '이미지 번호(SEQ_IMG_NO)';

COMMENT ON COLUMN "BOARD_IMG"."IMG_ORDER" IS '이미지 순서';

COMMENT ON COLUMN "BOARD_IMG"."IMG_ADDRESS" IS 'URL';

COMMENT ON COLUMN "BOARD_IMG"."BOARD_NO" IS '게시글 번호';

DROP TABLE "BOOKMARK";

CREATE TABLE "BOOKMARK" (
	"MEMBER_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "BOOKMARK"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "BOOKMARK"."BOARD_NO" IS '게시글 번호';

DROP TABLE "SEARCH_MEMBERS";

CREATE TABLE "SEARCH_MEMBERS" (
	"MEMBER_NO"	NUMBER		NOT NULL,
	"SEARCH_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "SEARCH_MEMBERS"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "SEARCH_MEMBERS"."SEARCH_NO" IS '최근검색어번호';

DROP TABLE "SEARCH_HASHTAG";

CREATE TABLE "SEARCH_HASHTAG" (
	"HASH_NO"	NUMBER		NOT NULL,
	"SEARCH_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "SEARCH_HASHTAG"."HASH_NO" IS '태그번호';

COMMENT ON COLUMN "SEARCH_HASHTAG"."SEARCH_NO" IS '최근검색어번호';

DROP TABLE "HASHTAG_BOARD";

CREATE TABLE "HASHTAG_BOARD" (
	"BOARD_NO"	NUMBER		NOT NULL,
	"HASH_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "HASHTAG_BOARD"."BOARD_NO" IS '게시글 번호';

COMMENT ON COLUMN "HASHTAG_BOARD"."HASH_NO" IS '태그번호';

DROP TABLE "MEMBER_SNS";

CREATE TABLE "MEMBER_SNS" (
	"MEMBER_SNS_NO"	NUMBER		NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"SNS_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "MEMBER_SNS"."MEMBER_SNS_NO" IS '회원SNS번호(SEQ_MEMBER_SNS_NO_NO)';

COMMENT ON COLUMN "MEMBER_SNS"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "MEMBER_SNS"."SNS_NO" IS 'SNS번호';

DROP TABLE "INTERESTS";

CREATE TABLE "INTERESTS" (
	"INTERESTS_NO"	NUMBER		NOT NULL,
	"INTERESTS_NAME"	VARCHAR2(100)		NOT NULL
);

COMMENT ON COLUMN "INTERESTS"."INTERESTS_NO" IS '관심분야 번호(SEQ_INTERESTS_NO_NO)';

COMMENT ON COLUMN "INTERESTS"."INTERESTS_NAME" IS '관심분야 이름';

DROP TABLE "TECH";

CREATE TABLE "TECH" (
	"TECH_NO"	NUMBER		NOT NULL,
	"TECH_NAME"	VARCHAR2(100)		NOT NULL,
	"TECH_IMG"	VARCHAR2(300)		NULL
);

COMMENT ON COLUMN "TECH"."TECH_NO" IS '지식기술 번호';

COMMENT ON COLUMN "TECH"."TECH_NAME" IS '지식기술명';

COMMENT ON COLUMN "TECH"."TECH_IMG" IS '이미지경로';

DROP TABLE "MEMBER_TECH";

CREATE TABLE "MEMBER_TECH" (
	"MEMBER_TECH_NO"	NUMBER		NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"TECH_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "MEMBER_TECH"."MEMBER_TECH_NO" IS '회원별 지식기술 번호';

COMMENT ON COLUMN "MEMBER_TECH"."MEMBER_NO" IS '회원번호';

COMMENT ON COLUMN "MEMBER_TECH"."TECH_NO" IS '지식기술 번호';

DROP TABLE "SNS";

CREATE TABLE "SNS" (
	"SNS_NO"	NUMBER		NOT NULL,
	"SNS_NAME"	VARCHAR2(50)		NOT NULL,
	"SNS_IMG"	VARCHAR2(300)		NOT NULL
);

COMMENT ON COLUMN "SNS"."SNS_NO" IS 'SNS번호(SEQ_SNS_NO_NO)';

COMMENT ON COLUMN "SNS"."SNS_NAME" IS 'SNS이름';

COMMENT ON COLUMN "SNS"."SNS_IMG" IS 'SNS 이미지';


--------------------------------------------------------------------------------------------------
------------------------------------------ PRIMARY KEY -------------------------------------------
--------------------------------------------------------------------------------------------------


ALTER TABLE "MEMBER" ADD CONSTRAINT "PK_MEMBER" PRIMARY KEY (
	"MEMBER_NO"
);

ALTER TABLE "BOARD" ADD CONSTRAINT "PK_BOARD" PRIMARY KEY (
	"BOARD_NO"
);

ALTER TABLE "FOLLOW" ADD CONSTRAINT "PK_FOLLOW" PRIMARY KEY (
	"FOLLOW_NO"
);

ALTER TABLE "MEMBER_INTERESTS" ADD CONSTRAINT "PK_MEMBER_INTERESTS" PRIMARY KEY (
	"INTERESTS_MEMBER_NO"
);

ALTER TABLE "COMMENT" ADD CONSTRAINT "PK_COMMENT" PRIMARY KEY (
	"COMMENT_NO"
);

ALTER TABLE "DECLARATION" ADD CONSTRAINT "PK_DECLARATION" PRIMARY KEY (
	"INDICTMENT_NO"
);

ALTER TABLE "NOTICE" ADD CONSTRAINT "PK_NOTICE" PRIMARY KEY (
	"NOTICE_NO"
);

ALTER TABLE "SEARCHES" ADD CONSTRAINT "PK_SEARCHES" PRIMARY KEY (
	"SEARCH_NO"
);

ALTER TABLE "MESSAGE" ADD CONSTRAINT "PK_MESSAGE" PRIMARY KEY (
	"MESSAGE_NO"
);

ALTER TABLE "CAREER" ADD CONSTRAINT "PK_CAREER" PRIMARY KEY (
	"CERTIFICATE_NO"
);

ALTER TABLE "LIKE" ADD CONSTRAINT "PK_LIKE" PRIMARY KEY (
	"MEMBER_NO",
	"BOARD_NO"
);

ALTER TABLE "HASHTAG" ADD CONSTRAINT "PK_HASHTAG" PRIMARY KEY (
	"HASH_NO"
);

ALTER TABLE "INQUIRY" ADD CONSTRAINT "PK_INQUIRY" PRIMARY KEY (
	"INQUIRY_NO"
);

ALTER TABLE "MEMBER_PROFILE" ADD CONSTRAINT "PK_MEMBER_PROFILE" PRIMARY KEY (
	"MEMBER_NO"
);

ALTER TABLE "BOARD_IMG" ADD CONSTRAINT "PK_BOARD_IMG" PRIMARY KEY (
	"IMG_NO"
);

ALTER TABLE "BOOKMARK" ADD CONSTRAINT "PK_BOOKMARK" PRIMARY KEY (
	"MEMBER_NO",
	"BOARD_NO"
);

ALTER TABLE "SEARCH_MEMBERS" ADD CONSTRAINT "PK_SEARCH_MEMBERS" PRIMARY KEY (
	"MEMBER_NO",
	"SEARCH_NO"
);

ALTER TABLE "SEARCH_HASHTAG" ADD CONSTRAINT "PK_SEARCH_HASHTAG" PRIMARY KEY (
	"HASH_NO",
	"SEARCH_NO"
);

ALTER TABLE "HASHTAG_BOARD" ADD CONSTRAINT "PK_HASHTAG_BOARD" PRIMARY KEY (
	"BOARD_NO",
	"HASH_NO"
);

ALTER TABLE "MEMBER_SNS" ADD CONSTRAINT "PK_MEMBER_SNS" PRIMARY KEY (
	"MEMBER_SNS_NO"
);

ALTER TABLE "INTERESTS" ADD CONSTRAINT "PK_INTERESTS" PRIMARY KEY (
	"INTERESTS_NO"
);

ALTER TABLE "TECH" ADD CONSTRAINT "PK_TECH" PRIMARY KEY (
	"TECH_NO"
);

ALTER TABLE "MEMBER_TECH" ADD CONSTRAINT "PK_MEMBER_TECH" PRIMARY KEY (
	"MEMBER_TECH_NO"
);

ALTER TABLE "SNS" ADD CONSTRAINT "PK_SNS" PRIMARY KEY (
	"SNS_NO"
);

--------------------------------------------------------------------------------------------------
------------------------------------------ FOREIGN KEY -------------------------------------------
--------------------------------------------------------------------------------------------------

ALTER TABLE "BOARD" ADD CONSTRAINT "FK_MEMBER_TO_BOARD_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "FOLLOW" ADD CONSTRAINT "FK_MEMBER_TO_FOLLOW_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "FOLLOW" ADD CONSTRAINT "FK_MEMBER_TO_FOLLOW_2" FOREIGN KEY (
	"FOLLOWER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_INTERESTS" ADD CONSTRAINT "FK_MEMBER_TO_MEMBER_INTERESTS_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_INTERESTS" ADD CONSTRAINT "FK_INTERESTS_TO_MEMBER_INTERESTS_1" FOREIGN KEY (
	"INTERESTS_NO"
)
REFERENCES "INTERESTS" (
	"INTERESTS_NO"
);

ALTER TABLE "COMMENT" ADD CONSTRAINT "FK_MEMBER_TO_COMMENT_1" FOREIGN KEY (
	"COMMENT_MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "COMMENT" ADD CONSTRAINT "FK_BOARD_TO_COMMENT_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "DECLARATION" ADD CONSTRAINT "FK_MEMBER_TO_DECLARATION_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "DECLARATION" ADD CONSTRAINT "FK_BOARD_TO_DECLARATION_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "NOTICE" ADD CONSTRAINT "FK_MEMBER_TO_NOTICE_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MESSAGE" ADD CONSTRAINT "FK_MEMBER_TO_MESSAGE_1" FOREIGN KEY (
	"SEND_MEMBER"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MESSAGE" ADD CONSTRAINT "FK_MEMBER_TO_MESSAGE_2" FOREIGN KEY (
	"RECEIVED_MEMBER"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "LIKE" ADD CONSTRAINT "FK_MEMBER_TO_LIKE_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "LIKE" ADD CONSTRAINT "FK_BOARD_TO_LIKE_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "INQUIRY" ADD CONSTRAINT "FK_MEMBER_TO_INQUIRY_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_PROFILE" ADD CONSTRAINT "FK_MEMBER_TO_MEMBER_PROFILE_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_PROFILE" ADD CONSTRAINT "FK_CAREER_TO_MEMBER_PROFILE_1" FOREIGN KEY (
	"CERTIFICATE_NO"
)
REFERENCES "CAREER" (
	"CERTIFICATE_NO"
);

ALTER TABLE "BOARD_IMG" ADD CONSTRAINT "FK_BOARD_TO_BOARD_IMG_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "BOOKMARK" ADD CONSTRAINT "FK_MEMBER_TO_BOOKMARK_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "BOOKMARK" ADD CONSTRAINT "FK_BOARD_TO_BOOKMARK_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "SEARCH_MEMBERS" ADD CONSTRAINT "FK_MEMBER_TO_SEARCH_MEMBERS_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER" (
	"MEMBER_NO"
);

ALTER TABLE "SEARCH_MEMBERS" ADD CONSTRAINT "FK_SEARCHES_TO_SEARCH_MEMBERS_1" FOREIGN KEY (
	"SEARCH_NO"
)
REFERENCES "SEARCHES" (
	"SEARCH_NO"
);

ALTER TABLE "SEARCH_HASHTAG" ADD CONSTRAINT "FK_HASHTAG_TO_SEARCH_HASHTAG_1" FOREIGN KEY (
	"HASH_NO"
)
REFERENCES "HASHTAG" (
	"HASH_NO"
);

ALTER TABLE "SEARCH_HASHTAG" ADD CONSTRAINT "FK_SEARCHES_TO_SEARCH_HASHTAG_1" FOREIGN KEY (
	"SEARCH_NO"
)
REFERENCES "SEARCHES" (
	"SEARCH_NO"
);

ALTER TABLE "HASHTAG_BOARD" ADD CONSTRAINT "FK_BOARD_TO_HASHTAG_BOARD_1" FOREIGN KEY (
	"BOARD_NO"
)
REFERENCES "BOARD" (
	"BOARD_NO"
);

ALTER TABLE "HASHTAG_BOARD" ADD CONSTRAINT "FK_HASHTAG_TO_HASHTAG_BOARD_1" FOREIGN KEY (
	"HASH_NO"
)
REFERENCES "HASHTAG" (
	"HASH_NO"
);

ALTER TABLE "MEMBER_SNS" ADD CONSTRAINT "FK_MEMBER_PROFILE_TO_MEMBER_SNS_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER_PROFILE" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_SNS" ADD CONSTRAINT "FK_SNS_TO_MEMBER_SNS_1" FOREIGN KEY (
	"SNS_NO"
)
REFERENCES "SNS" (
	"SNS_NO"
);

ALTER TABLE "MEMBER_TECH" ADD CONSTRAINT "FK_MEMBER_PROFILE_TO_MEMBER_TECH_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER_PROFILE" (
	"MEMBER_NO"
);

ALTER TABLE "MEMBER_TECH" ADD CONSTRAINT "FK_TECH_TO_MEMBER_TECH_1" FOREIGN KEY (
	"TECH_NO"
)
REFERENCES "TECH" (
	"TECH_NO"
);


/* 이메일 인증 */
DROP TABLE "AUTH_KEY";

CREATE TABLE "AUTH_KEY" (
	"AUTH_KEY_NO"	NUMBER		NOT NULL,
	"CODE"	CHAR(6)		NOT NULL,
	"EMAIL"	VARCHAR2(50)		NOT NULL,
	"CREATE_TIME"	DATE	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "AUTH_KEY"."AUTH_KEY_NO" IS '인증키 구분 번호(SEQ_AUTH_KEY_NO)';

COMMENT ON COLUMN "AUTH_KEY"."CODE" IS '코드';

COMMENT ON COLUMN "AUTH_KEY"."EMAIL" IS '이메일';

COMMENT ON COLUMN "AUTH_KEY"."CREATE_TIME" IS '인증 코드 생성 시간';

ALTER TABLE "AUTH_KEY" ADD CONSTRAINT "PK_AUTH_KEY" PRIMARY KEY (
	"AUTH_KEY_NO"
);


CREATE SEQUENCE SEQ_AUTH_KEY_NO NOCACHE;


UPDATE "AUTH_KEY" SET
CODE = #{authkey},
CREATE_TIME = sysdate
WHERE EMAIL = #{email};

INSERT INTO "AUTH_KEY" VALUES(SEQ_AUTH_KEY_NO.NEXTVAL, #{authkey}, #{email}, DEFAULT);

SELECT * FROM "AUTH_KEY";

SELECT COUNT(*) FROM "AUTH_KEY"
WHERE EMAIL = #{email}
AND CODE = #{inputKey};

--------------------------------------------------------------------------------------------------
--------------------------------------------- INSERT  --------------------------------------------
--------------------------------------------------------------------------------------------------

CREATE SEQUENCE SEQ_INTERESTS_NO NOCACHE;
CREATE SEQUENCE SEQ_MEMBER_NO NOCACHE;
CREATE SEQUENCE SEQ_COMMENT_NO NOCACHE;
CREATE SEQUENCE SEQ_BOARD_NO NOCACHE;
CREATE SEQUENCE SEQ_BOARD_IMG_NO NOCACHE;
CREATE SEQUENCE SEQ_DECLARATION_NO NOCACHE;
CREATE SEQUENCE SEQ_HASHTAG_NO NOCACHE;
CREATE SEQUENCE SEQ_SEARCHES_NO NOCACHE;
CREATE SEQUENCE SEQ_INQUIRY_NO NOCACHE;
CREATE SEQUENCE SEQ_MEMBER_TECH_NO NOCACHE;
CREATE SEQUENCE SEQ_TECH_NO NOCACHE;
CREATE SEQUENCE SEQ_MEMBER_SNS_NO NOCACHE;
CREATE SEQUENCE SEQ_SNS_NO NOCACHE;
CREATE SEQUENCE SEQ_CAREER_NO NOCACHE;
CREATE SEQUENCE SEQ_FOLLOW_NO NOCACHE;
CREATE SEQUENCE SEQ_MESSAGE_NO NOCACHE;
CREATE SEQUENCE SEQ_NOTICE_NO NOCACHE;

INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL, 'AI/로봇');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'IT/SW');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'게임');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'공학');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'교육');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'마케팅');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'금융');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'동물');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'디자인');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'미용/패션');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'방송');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'법/수사');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'사회복지');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'스포츠');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'여행');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'책/영화/드라마');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'우주/항공');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'음식');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'음악');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'의료/바이오');
INSERT INTO INTERESTS VALUES(SEQ_INTERESTS_NO.NEXTVAL,'환경/생태');


INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '인스타', '/');
INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '페이스북', '/');
INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '트위터', '/');
INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '깃허브', '/');
INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '노션', '/');
INSERT INTO SNS VALUES(SEQ_SNS_NO.NEXTVAL, '네이버블로그', '/');


INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '포토샵', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '자바', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '파이썬 ', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '씨언어', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'SQL', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'HTML', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'CSS', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'JavaScript', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'Unity', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '일러스트', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '인디자인', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '그래픽 디자인', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '엑셀', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '엑세스', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '파워포인트', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '워드', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '한글', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, 'chat GPT', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '큐베이스', '/');
INSERT INTO TECH VALUES(SEQ_TECH_NO.NEXTVAL, '베가스', '/');


COMMIT;
ROLLBACK;

SELECT * FROM "MEMBER"
ORDER BY MEMBER_NO ;

SELECT * FROM BOARD ;
SELECT * FROM BOARD_IMG ;

SELECT * FROM "MESSAGE";

SELECT * FROM "INQUIRY";

SELECT * FROM "HASHTAG";

INSERT INTO	"HASHTAG" VALUES(SEQ_HASHTAG_NO.NEXTVAL, '가가가나1나다1다다');

SELECT * FROM "AUTH_KEY";

SELECT MEMBER_NO, MEMBER_EMAIL, MEMBER_PW, MEMBER_NICKNAME, MEMBER_URL, TO_CHAR(ENROLL_DATE, 'YYYY"년" MM"월" DD"일" HH24"시" MI"분" SS"초"') ENROLL_DATE, AUTHORITY
      FROM "MEMBER"
      WHERE MEMBER_DEL_FL = 'N'
      AND MEMBER_EMAIL = 'pingpong123@kh.or.kr';

INSERT INTO	"MEMBER" VALUES(SEQ_MEMBER_NO.NEXTVAL, 'pingpong123@kh.or.kr', '123', '핑퐁', 'pingpong123', DEFAULT, DEFAULT, DEFAULT);

SELECT * FROM TECH;

SELECT * FROM MEMBER_TECH;

INSERT INTO MEMBER_TECH 
VALUES(SEQ_TECH_NO.NEXTVAL, 308, 20);

SELECT COUNT(*) 
FROM "MEMBER"
WHERE MEMBER_URL  = '123123'
AND MEMBER_DEL_FL = 'N';

UPDATE "MEMBER" SET
MEMBER_PW = '$2a$10$WbZyGxRlXf6970wme7Z4hu8qtNGZA3.hDHmNX/H3D8f8MHTSVlGEO'
WHERE MEMBER_NO = 50;

-- 멤버삭제
DELETE FROM "MEMBER"
WHERE MEMBER_NO = 74;

SELECT * FROM MEMBER_TECH
WHERE MEMBER_NO = 50;

-- MEMBER_TECH 삭제
DELETE FROM "MEMBER_TECH"
WHERE MEMBER_NO = 50;

-- 게시글 삭제
DELETE FROM BOARD
WHERE BOARD_NO = 58;
-- 게시글 사진 삭제
DELETE FROM BOARD_IMG
WHERE BOARD_NO = 58;

-- 메세지 삭제
DELETE FROM "MESSAGE"
WHERE RECEIVED_MEMBER = 48;

-- 이메일 유무 검사
SELECT COUNT(*) 
FROM "MEMBER"
WHERE MEMBER_EMAIL = '123123@123123.com';

-- 비밀번호 변경
UPDATE "MEMBER" SET
MEMBER_PW = '123'
WHERE MEMBER_EMAIL = 'ckcc0813@gmail.com';

SELECT COUNT(*)
FROM
"MEMBER"
WHERE MEMBER_NICKNAME = '나봉'
AND MEMBER_DEL_FL = 'N';

-- 유저 검색
SELECT MEMBER_NO , MEMBER_EMAIL  ,MEMBER_NICKNAME   FROM "MEMBER"
WHERE LOWER(MEMBER_NICKNAME) LIKE '%%'
AND MEMBER_DEL_FL = 'N'
AND ROWNUM <= 40;

-- 유저검색 프로필 사진
SELECT MEMBER_NO , MEMBER_EMAIL  ,MEMBER_NICKNAME, PROFILE_IMG   
FROM "MEMBER"
JOIN "MEMBER_PROFILE" USING(MEMBER_NO)
WHERE LOWER(MEMBER_NICKNAME) LIKE '%SAM%'
AND MEMBER_DEL_FL = 'N'
AND ROWNUM <= 40
ORDER BY LENGTH(MEMBER_NICKNAME);

-- 태그 검색
SELECT *  FROM "HASHTAG"
WHERE LOWER(HASHTAG_NAME) LIKE '%%'
AND ROWNUM <= 40
ORDER BY LENGTH(HASHTAG_NAME);


-- MEMBER_PROFILE
SELECT * FROM "MEMBER_PROFILE";

-- 샘플 계정 추가
INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'cccaaaaaaba@aaaba.com', 'cccaaaba'
		, 'cccaaaaaaba', 'cccaaab', DEFAULT, DEFAULT, DEFAULT);

	
-- 신고 테이블
	
SELECT * FROM DECLARATION; 
	
DROP TABLE "DECLARATION";

CREATE TABLE "DECLARATION" (
	"INDICTMENT_NO"	NUMBER		NOT NULL,
	"INDICTMENT_CONTENT"	VARCHAR2(1000)		NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"BOARD_NO"	NUMBER		NOT NULL
);

COMMENT ON COLUMN "DECLARATION"."INDICTMENT_NO" IS '신고 번호(SEQ_REPORT_NO)';

COMMENT ON COLUMN "DECLARATION"."INDICTMENT_CONTENT" IS '신고내용';

COMMENT ON COLUMN "DECLARATION"."MEMBER_NO" IS '신고한 회원번호';

COMMENT ON COLUMN "DECLARATION"."BOARD_NO" IS '게시글 번호';

-- MEMBER_SNS
SELECT * FROM MEMBER_SNS; 
SELECT * FROM SNS; 
INSERT INTO "MEMBER_SNS"
VALUES(SEQ_TECH_NO.NEXTVAL, 300, #{snsNo})
