"use client";

import Table from "@/components/table/Table";

import type { Applicant } from "./projectData";

export default function MembersSection({ applications }: { applications: Applicant[] }) {
  const transformedMembers = applications.map((app) => ({
    ...app,
    user: typeof app.user === "object" ? app.user.name : app.user,
  }));

  return (
    <Table
      headers={[
        { key: "user", label: "이름" },
        { key: "position", label: "직무" },
      ]}
      data={transformedMembers}
      fontSize="14px"
    />
  );
}
