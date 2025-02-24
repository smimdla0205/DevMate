"use client";

import { useState } from "react";

import Table from "@/components/table/Table";
import Modal from "@/components/modal/Modal";

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
      </Modal>
    </div>
  );
}
