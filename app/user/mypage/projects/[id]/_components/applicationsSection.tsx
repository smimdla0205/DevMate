"use client";

import { useState } from "react";

import Table from "@/components/table/table";
import Modal from "@/components/modal/Modal";
import Button from "@/components/button/button";

import styles from "../ProjectDetail.module.scss";

import type { Applicant } from "./projectData";

import ApplicantDetails from "./applicantDetails";

export default function ApplicationsSection({ applications }: { applications: Applicant[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

  const handleModal = (id: string) => {
    const applicant = applications.find((app) => app.id === Number(id));
    setSelectedApplicant(applicant || null);
    setIsModalOpen(true);
  };

  const transformedApplications = applications.map((app) => ({
    ...app,
    user: typeof app.user === "object" ? app.user.name : app.user,
  }));

  return (
    <div className={styles.container__content}>
      <h2>🙆‍♀️ 신청 현황</h2>
      <Table
        headers={[
          { key: "user", label: "이름" },
          { key: "position", label: "희망 직무" },
          { key: "status", label: "상태" },
          { key: "id", label: "지원서 열람" },
        ]}
        data={transformedApplications}
        fontSize="14px"
        onFormClick={handleModal}
      />

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>🎨 지원서</h1>
        {selectedApplicant && <ApplicantDetails applicant={selectedApplicant} />}

        <span style={{ fontWeight: "bold", color: "#706efa", marginTop: "30px" }}>
          프로젝트 참여를 수락하시겠습니까?
        </span>
        <div className={styles.modal__buttons}>
          <Button variant="main" size="long" onClick={() => console.log("승인")}>
            수락
          </Button>
          <Button variant="sub" size="long" onClick={() => console.log("거절")}>
            거절
          </Button>
        </div>
      </Modal>
    </div>
  );
}
