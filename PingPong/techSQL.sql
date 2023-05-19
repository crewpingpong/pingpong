CREATE TABLE "TECH" (
	"TECH_NO"	NUMBER		NOT NULL,
	"TECH_NAME"	VARCHAR2(100)		NOT NULL,
	"TECH_IMG"	VARCHAR2(300)		NULL
);

CREATE TABLE "MEMBER_TECH" (
	"MEMBER_TECH_NO"	NUMBER		NOT NULL,
	"MEMBER_NO"	NUMBER		NOT NULL,
	"TECH_NO"	NUMBER		NOT NULL
);

---------------------
-- 외래키 삭제 : ALTER TABLE [테이블명] DROP CONSTRAINT [제약조건명];

ALTER TABLE "MEMBER_TECH" DROP CONSTRAINT "FK_MEMBER_PROFILE_TO_MEMBER_TECH_1";
ALTER TABLE "MEMBER_TECH" DROP CONSTRAINT "FK_TECH_TO_MEMBER_TECH_1";

COMMIT;

---------------------
-- FOREIGN KEY + CASCADE 

ALTER TABLE "MEMBER_TECH" ADD CONSTRAINT "FK_MEMBER_PROFILE_TO_MEMBER_TECH_1" FOREIGN KEY (
	"MEMBER_NO"
)
REFERENCES "MEMBER_PROFILE" (
	"MEMBER_NO"
) ON DELETE CASCADE;

ALTER TABLE "MEMBER_TECH" ADD CONSTRAINT "FK_TECH_TO_MEMBER_TECH_1" FOREIGN KEY (
	"TECH_NO"
)
REFERENCES "TECH" (
	"TECH_NO"
) ON DELETE CASCADE;

COMMIT;

---------------------
-- 컬럼 삭제

DELETE FROM "MEMBER_TECH";
DELETE FROM "TECH";

---------------------
-- 지식/기술 아이콘 INSERT

SELECT TECH_NO, TECH_NAME, TECH_IMG
FROM "pingpong".TECH
ORDER BY TECH_NO;

SELECT MEMBER_TECH_NO, MEMBER_NO, TECH_NO
FROM "pingpong".MEMBER_TECH;

SELECT MEMBER_NO, MEMBER_EMAIL, MEMBER_PW, MEMBER_NICKNAME, MEMBER_URL, ENROLL_DATE, MEMBER_DEL_FL, AUTHORITY
FROM "pingpong"."MEMBER";


-- 이미지 경로 : /resources/images/profileImage/20230519090939_72865.jpg
-- 이미지 경로 : /resources/images/personal/techIcon/certiIcon1_phtoshop.png

INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(1, '포토샵', '/resources/images/personal/techIcon/certiIcon1_phtoshop.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(2, '일러스트', '/resources/images/personal/techIcon/certiIcon2_illust.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(3, '인디자인', '/resources/images/personal/techIcon/certiIcon3_xd.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(4, '그래픽 디자인', '/resources/images/personal/techIcon/certiIcon4_primer.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(5, '자바', '/resources/images/personal/techIcon/certiIcon5_java.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(6, '파이썬', '/resources/images/personal/techIcon/certiIcon6_python.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(7, '씨언어', '/resources/images/personal/techIcon/certiIcon7_c.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(8, 'SQL', '/resources/images/personal/techIcon/certiIcon8_sql.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(9, 'HTML', '/resources/images/personal/techIcon/certiIcon9_html.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(10, 'CSS', '/resources/images/personal/techIcon/certiIcon10_css.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(11, 'JavaScript', '/resources/images/personal/techIcon/certiIcon11_js.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(12, 'Unity', '/resources/images/personal/techIcon/certiIcon12_unity.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(13, '엑셀', '/resources/images/personal/techIcon/certiIcon13_exel.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(14, '엑세스', '/resources/images/personal/techIcon/certiIcon14_acess.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(15, '파워포인트', '/resources/images/personal/techIcon/certiIcon15_power.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(16, '워드', '/resources/images/personal/techIcon/certiIcon16_word.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(17, '한글', '/resources/images/personal/techIcon/certiIcon17_han.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(18, 'chat GPT', '/resources/images/personal/techIcon/certiIcon18_gpt.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(19, '큐베이스', '/resources/images/personal/techIcon/certiIcon19_cubase.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(20, '베가스 ', '/resources/images/personal/techIcon/certiIcon20_vegas.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(21, 'ios', '/resources/images/personal/techIcon/certiIcon21_ios.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(22, '안드로이드', '/resources/images/personal/techIcon/certiIcon22_android.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(23, 'spring', '/resources/images/personal/techIcon/certiIcon23_spring.png');
INSERT INTO "pingpong".TECH (TECH_NO, TECH_NAME, TECH_IMG)
VALUES(24, 'tomcat', '/resources/images/personal/techIcon/certiIcon24_tomcat.png');


---------------------
-- alter table [테이블명] drop [컬럼명];
ALTER TABLE "MEMBER_PROFILE" DROP COLUMN MEMBER_TECH;
ALTER TABLE "MEMBER_PROFILE" DROP COLUMN CERTIFICATE_NO;

SELECT * FROM "MEMBER_PROFILE";

---------------------
-- !!!!!!!!!!!!!!!!!  SELECT  !!!!!!!!!!!!!!!!!
SELECT MEMBER_NO, MEMBER_NICKNAME, TECH_NAME
FROM "MEMBER"
JOIN "MEMBER_TECH" USING (MEMBER_NO)
JOIN "TECH" USING (TECH_NO)
WHERE MEMBER_NO = 50;



---------------------
------ 샘플데이터 ------
---------------------
SELECT * FROM "MEMBER_PROFILE";

UPDATE "pingpong".MEMBER_PROFILE
SET PROFILE_IMG='/resources/images/profileImage/20230519090939_72865.jpg'
	, BACKGROUND_IMG='/resources/images/mypage/20230518212505_71467.PNG'
	, MEMBER_INFO='구황작물 자격증'
	, MEMBER_CAREER='말하는 감자 경력직'
	, ONE_LINER='안녕하세요 빙봉입니다'
WHERE MEMBER_NO=50;


INSERT INTO "pingpong".MEMBER_TECH
(MEMBER_TECH_NO, MEMBER_NO, TECH_NO)
VALUES(SEQ_TECH_NO.NEXTVAL, 50, 5);




---------------------

SELECT MEMBER_NO, MEMBER_EMAIL, MEMBER_PW, MEMBER_NICKNAME, MEMBER_URL, ENROLL_DATE, MEMBER_DEL_FL, AUTHORITY
FROM "pingpong"."MEMBER";

SELECT MEMBER_NO, PROFILE_IMG, BACKGROUND_IMG, MEMBER_INFO, MEMBER_CAREER, MEMBER_TECH, CERTIFICATE_NO, ONE_LINER
FROM "pingpong".MEMBER_PROFILE;

