"use client";
import { useParams } from "next/navigation";

import { useState } from "react";

import Table from "@/components/table/table";
import InputField from "@/components/inputField/InputField";

import styles from "./ProjectDetail.module.scss";

import projectData from "./components/projectData";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  const project = projectData.find((project) => project.id === Number(projectId));

  const [isNoticeEdit, setIsNoticeEdit] = useState(false);
  const [noticeContent, setNoticeContent] = useState(project?.notices[0].content);

  const applyTableHeaders = [
    { key: "user", label: "이름" },
    { key: "position", label: "희망 직무" },
    { key: "status", label: "상태" },
    { key: "id", label: "지원서 열람" },
  ];
  const memberTableHeaders = [
    { key: "user", label: "이름" },
    { key: "position", label: "직무" },
  ];

  const handleNoticeClick = () => {
    setIsNoticeEdit(!isNoticeEdit);
  };

  const handleModal = (id: string) => {
    console.log("모달 열기, id:", id);
  };

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{project?.projectTitle}</h1>

      <div className={styles.container__content} style={{ width: "100%" }}>
        <h2>🎯 프로젝트 목표</h2>
        <p>{project?.goal}</p>
      </div>

      <div className={styles.container__row_2}>
        <div className={styles.container__content}>
          <h2>🗓️ 진행 기간</h2>
          <p>
            {project?.projectPeriodStart}
            <br />~ {project?.projectPeriodEnd}
          </p>
        </div>

        <div className={styles.container__content}>
          <div className={styles.container__notice__header}>
            <h2>📌 공지사항</h2>
            <button type="button" onClick={handleNoticeClick} className={isNoticeEdit ? styles.edit : styles.complete}>
              {isNoticeEdit ? "완료" : "수정"}
            </button>
          </div>

          {isNoticeEdit ? (
            <InputField value={noticeContent} onChange={(e) => setNoticeContent(e.target.value)} />
          ) : (
            // <input type="text" defaultValue={noticeContent} onChange={(e) => setNoticeContent(e.target.value)} />
            <p>{noticeContent}</p>
          )}
        </div>
      </div>

      <div className={styles.container__content}>
        <h2>🙆‍♀️ 신청 현황</h2>
        <Table
          headers={applyTableHeaders}
          data={(project?.applications ?? []).map((app) => ({
            ...app,
            user: typeof app.user === "object" && app.user !== null ? app.user.name : app.user,
          }))}
          fontSize="14px"
          onFormClick={handleModal}
        />
      </div>

      <div className={styles.container__content} style={{ width: "50%" }}>
        <h2>✨ 참여 멤버</h2>
        <Table
          headers={memberTableHeaders}
          data={(project?.applications ?? []).map((app) => ({
            ...app,
            user: typeof app.user === "object" && app.user !== null ? app.user.name : app.user,
          }))}
          fontSize="14px"
        />
      </div>
    </div>
  );
}
