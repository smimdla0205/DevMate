import styles from "./RecruitmentDetail.module.scss";

import RecruitmentContent from "./_components/RecruitmentContent";

const RecruitmentDetail = () => {
  return (
    <div className={styles.container}>
      <RecruitmentContent />
    </div>
  );
};

export default RecruitmentDetail;

interface Project {
  id: number; // 프로젝트 ID
  leaderId: string; // 프로젝트 리더 ID
  recruitmentTitle: string; // 모집글 제목
  projectTitle: string; // 프로젝트명
  goal?: string; // 프로젝트 목표 (선택적)
  description: string; // 프로젝트 설명
  projectPeriodStart: Date; // 프로젝트 시작 기간
  projectPeriodEnd: Date; // 프로젝트 종료 기간
  recruitmentStart: Date; // 모집 시작일
  recruitmentEnd: Date; // 모집 마감일
  like: number; // 좋아요 수
  hits: number; // 조회수
  createdAt: Date; // 생성일
}

const exampleProject: Project = {
  id: 1,
  leaderId: "user123",
  recruitmentTitle: "함께 성장할 프론트엔드 개발자를 모집합니다!",
  projectTitle: "스터디 관리 플랫폼",
  goal: "개발자들을 위한 효율적인 스터디 관리 시스템 구축",
  description: "이 프로젝트는 스터디 그룹을 쉽게 만들고 관리할 수 있도록 돕는 웹 애플리케이션입니다.",
  projectPeriodStart: new Date("2025-03-01"),
  projectPeriodEnd: new Date("2025-06-30"),
  recruitmentStart: new Date("2025-02-20"),
  recruitmentEnd: new Date("2025-02-29"),
  like: 12,
  hits: 150,
  createdAt: new Date(),
};
