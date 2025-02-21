import styles from "./RecruitmentsItem.module.scss";

import RecruitmentsTag from "../RecruitmentsTag/RecruitmentsTag";

import { FaHeart, FaEye, FaComment } from "react-icons/fa";

export default function RecruitmentsItem() {
  return (
    <div>
      <div className={styles["main__post-item"]}>
        <div className={styles["main__post-content"]}>
          <div className={styles["main__post-header"]}>
            <div className={styles["main__post-status"]}>모집중</div>
            <h2 className={styles["main__post-title"]}>프로젝트 제목</h2>
          </div>
          <p className={styles["main__post-description"]}>프로젝트 설명이 여기에 들어갑니다.</p>
          <RecruitmentsTag tags={["Next.js", "React"]} />
          <div className={styles["main__post-meta"]}>
            <div>
              <span className={styles["main__post-author"]}>신짱구</span>
              <span className={styles["main__post-dot"]}>·</span>
              <span className={styles["main__post-date"]}>5분 전</span>
            </div>
            <div className={styles["main__post-stats"]}>
              <div className={styles["main__post-stats-heart"]}>
                <FaHeart /> <span>12</span>
              </div>
              <div className={styles["main__post-stats-eye"]}>
                <FaEye /> <span>34</span>
              </div>
              <div className={styles["main__post-stats-comment"]}>
                <FaComment /> <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
