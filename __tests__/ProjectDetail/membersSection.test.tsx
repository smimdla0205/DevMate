import MembersSection from "@/app/user/projects/[id]/_components/membersSection";

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

interface Applicant {
  id: number;
  user: { name: string };
  position: string;
  status: "accept" | "reject" | "waiting";
}

const mockStore = {
  applications: [] as Applicant[],
  setApplications: vi.fn((apps) => {
    mockStore.applications = apps;
  }),
};

vi.mock("@/stores/useApplicationsStore", () => {
  return {
    useApplicationsStore: vi.fn(() => mockStore),
  };
});

describe("MembersSection", () => {
  beforeEach(() => {
    mockStore.applications = [];
  });

  it("헤딩이 정상적으로 렌더링되는지 확인", async () => {
    render(<MembersSection />);
    await waitFor(() => {
      expect(screen.getByText("✨ 참여 멤버")).toBeInTheDocument();
    });
  });

  it("헤더가 정상적으로 렌더링되는지 확인", async () => {
    mockStore.setApplications([{ id: 1, user: { name: "Joey" }, position: "머신러닝", status: "accept" }]);

    render(<MembersSection />);

    await waitFor(() => {
      expect(screen.getByText("이름")).toBeInTheDocument();
      expect(screen.getByText("직무")).toBeInTheDocument();
    });
  });

  it("참여 멤버가 있으면 테이블이 정상적으로 렌더링되는지 확인", async () => {
    mockStore.setApplications([
      { id: 1, user: { name: "Monica" }, position: "프론트엔드", status: "accept" },
      { id: 2, user: { name: "Chandler" }, position: "백엔드", status: "accept" },
    ]);

    render(<MembersSection />);

    await waitFor(() => {
      expect(screen.getByText("✨ 참여 멤버")).toBeInTheDocument();
      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.getByText("Monica")).toBeInTheDocument();
      expect(screen.getByText("Chandler")).toBeInTheDocument();
    });
  });

  it("참여 멤버가 없으면 테이블이 비어있는지 확인", async () => {
    mockStore.setApplications([
      { id: 1, user: { name: "Rachel" }, position: "디자이너", status: "waiting" },
      { id: 2, user: { name: "Ross" }, position: "데이터 사이언티스트", status: "reject" },
    ]);

    render(<MembersSection />);

    await waitFor(() => {
      expect(screen.getByText("✨ 참여 멤버")).toBeInTheDocument();
      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.queryByText("Rachel")).not.toBeInTheDocument();
      expect(screen.queryByText("Ross")).not.toBeInTheDocument();
    });
  });
});
