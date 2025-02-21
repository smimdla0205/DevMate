import styles from "./RecruitmentContent.module.scss";

const RecruitmentContent = () => {
  return (
    <div className={styles["recruitmentContent"]}>
      <section className={styles["recruitmentContent__header"]}>
        <div className={styles["recruitmentContent__title"]}>{"모집글 제목"}</div>
        <div className={styles["recruitmentContent__author"]}>{"작성자 이름"}</div>
        <div className={styles["recruitmentContent__meta"]}>
          <span className={styles["recruitmentContent__date"]}>
            작성일 {"25.02.17 14:34"} | 조회수 {"16"}
          </span>
          <span className={styles["recruitmentContent__actions"]}>{"수정 삭제 버튼 자리 (추후 컴포넌트 생성)"}</span>
        </div>
      </section>

      <section className={styles["recruitmentContent__body"]}>
        <div className={styles["recruitmentContent__details"]}>
          <h2 className={styles["recruitmentContent__subtitle"]}>
            🎯 프로젝트 제목 <span>{"게시판 만들기 프로젝트"}</span>
          </h2>
          <h2 className={styles["recruitmentContent__subtitle"]}>🚩 프로젝트 목표</h2>
          <p className={styles["recruitmentContent__description"]}>{"프로젝트 목표 내용"}</p>
          <h2 className={styles["recruitmentContent__subtitle"]}>
            📆 진행 기간 <span>{"2025년 03월 ~ 2025년 05월"}</span>
          </h2>
          <h2 className={styles["recruitmentContent__subtitle"]}>
            📆 모집 기간 <span>{"2025년 03월 ~ 2025년 05월"}</span>
          </h2>
        </div>
        <div className={styles["recruitmentContent__content"]}>{"모집 내용"}</div>
        <div className={styles["recruitmentContent__actions"]}>{"좋아요 및 지원하기 버튼(추후 컴포넌트 생성)"}</div>
      </section>
    </div>
  );
};

export default RecruitmentContent;
