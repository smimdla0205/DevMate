import styles from "./Recruitments.module.scss";

import { FaSearch, FaHashtag, FaHeart, FaEye, FaComment } from "react-icons/fa";

export default function Recruitments() {
  return (
    <div className={styles["main"]}>
      {/* 비주얼 영역 */}
      <div className={styles["main__visual"]}>
        <div className={styles["main__visual-container"]}>
          <h1 className={styles["main__visual-title"]}>프로젝트 팀원을 모집해보세요.</h1>
          <p className={styles["main__visual-subtitle"]}>협업을 통한 경험 노하우 쌓기</p>
        </div>
      </div>
      <div className={styles["main__container"]}>
        {/* 필터 */}
        <div className={styles["main__filter"]}>
          <button className={`${styles["main__filter-item"]} ${styles["main__filter-item--active"]}`}>전체</button>
          <button className={styles["main__filter-item"]}>모집중</button>
          <button className={styles["main__filter-item"]}>모집완료</button>
        </div>
        <div className={styles["main__separator"]} />

        {/* 검색창 */}
        <div className={styles["main__search"]}>
          <div className={styles["main__search-input"]}>
            <FaSearch className={styles["main__search-icon"]} />
            <input type="text" placeholder="팀 프로젝트, 사이드 프로젝트를 검색해보세요!" />
          </div>
          <button className={styles["main__search-button"]}>검색</button>
        </div>

        {/* 태그 검색창 */}
        <div className={styles["main__tag-search"]}>
          <div className={styles["main__tag-input"]}>
            <FaHashtag className={styles["main__tag-icon"]} />
            <input type="text" placeholder="태그로 검색해보세요!" />
          </div>
          <button className={styles["main__tag-reset"]}>초기화</button>
        </div>

        {/* 정렬 필터 + 글쓰기 버튼 */}
        <div className={styles["main__sort"]}>
          <div className={styles["main__sort-options"]}>
            <button className={`${styles["main__sort-item"]} ${styles["main__sort-item--active"]}`}>• 최신순</button>
            <button className={styles["main__sort-item"]}>• 조회수순</button>
            <button className={styles["main__sort-item"]}>• 댓글많은순</button>
            <button className={styles["main__sort-item"]}>• 좋아요순</button>
          </div>
          <button className={styles["main__write-button"]}>글쓰기</button>
        </div>

        <div className={styles["main__post-separator"]} />

        {/* 글 리스트 */}
        <div className={styles["main__post-list"]}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles["main__post-item"]}>
              <div className={styles["main__post-content"]}>
                <div className={styles["main__post-header"]}>
                  <div className={styles["main__post-status"]}>모집중</div>
                  <h2 className={styles["main__post-title"]}>프로젝트 제목 {index + 1}</h2>
                </div>
                <p className={styles["main__post-description"]}>프로젝트 설명이 여기에 들어갑니다.</p>
                <div className={styles["main__post-tags"]}>
                  <span className={styles["main__post-tag"]}>#React</span>
                  <span className={styles["main__post-tag"]}>#Next.js</span>
                </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
