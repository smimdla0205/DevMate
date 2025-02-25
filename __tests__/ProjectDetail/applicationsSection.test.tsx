import ApplicationsSection from "@/app/user/projects/[id]/_components/applicationsSection";

import type { Applicant } from "@/app/user/projects/[id]/_components/projectData";

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const applicationData: Applicant[] = [
  {
    id: 1,
    position: "프론트엔드 희망",
    introduction: "안녕하세요. 저는 프론트엔드 개발자입니다.",
    portfolioUrl: "https://example.com",
    status: "accept",
    user: {
      id: 1,
      name: "Monica",
      gender: "Female",
      birthDate: "1996-09-01T00:00:00Z",
      position: "프론트엔드",
      address: "부산광역시 동래구",
      career: 3,
    },
  },
  {
    id: 2,
    position: "백엔드 희망",
    introduction: "안녕하세요. 저는 백엔드 개발자입니다.",
    portfolioUrl: "https://example.com",
    status: "waiting",
    user: {
      id: 4,
      name: "Chandler",
      gender: "Male",
      birthDate: "1996-09-01T00:00:00Z",
      position: "백엔드",
      address: "캘리포니아주",
      career: 3,
    },
  },
  {
    id: 3,
    position: "디자이너 희망",
    introduction: "안녕하세요. 저는 디자이너입니다.",
    portfolioUrl: "https://example.com",
    status: "reject",
    user: {
      id: 4,
      name: "Pheobe",
      gender: "Female",
      birthDate: "1996-09-01T00:00:00Z",
      position: "디자이너",
      address: "서울특별시 동대문구",
      career: 0,
    },
  },
  {
    id: 4,
    position: "머신러닝 희망",
    introduction: "안녕하세요. 저는 머신러닝 개발자입니다.",
    portfolioUrl: "https://example.com",
    status: "accept",
    user: {
      id: 4,
      name: "Joey",
      gender: "Female",
      birthDate: "1996-09-01T00:00:00Z",
      position: "머신러닝",
      address: "서울특별시 중구",
      career: 3,
    },
  },
];

describe("ApplicationsSection", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // ✅ 모든 mock 초기화
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it("heading, table이 렌더링되는지", () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    expect(screen.getByText("🙆‍♀️ 신청 현황")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("신청자의 이름, 희망 직무, 상태, 지원서 열람 버튼이 렌더링되는지", () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    expect(screen.getByText("Monica")).toBeInTheDocument();
    expect(screen.getByText("프론트엔드 희망")).toBeInTheDocument();
    expect(screen.getAllByText("수락됨").length).toBeGreaterThan(1);
    expect(screen.getByText("지원서 열람")).toBeInTheDocument();
  });

  it("지원서 열람 버튼 클릭 시 해당 회원의 지원서 모달이 열리는지", async () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    const applicantButton = screen.getAllByText("열람하기")[0];
    fireEvent.click(applicantButton);

    await waitFor(() => {
      expect(screen.getByText("🎨 지원서")).toBeInTheDocument();
      expect(screen.getByText("안녕하세요. 저는 프론트엔드 개발자입니다.")).toBeInTheDocument();
    });
  });

  it("이미 수락된 회원일 시 수락, 거절 버튼이 보이지 않는지", async () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    const applicantButton = screen.getAllByText("열람하기")[0];
    fireEvent.click(applicantButton);
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "수락" })).not.toBeInTheDocument();
    });
  });

  it("이미 거절된 회원일 시 수락, 거절 버튼이 보이지 않는지", async () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    const applicantButton = screen.getAllByText("열람하기")[0];
    fireEvent.click(applicantButton);
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "수락" })).not.toBeInTheDocument();
    });
  });

  it("대기 중인 회원 지원서 모달에서 수락 버튼 클릭 시 confirm 창에서 확인 후 상태가 '수락됨'으로 변경되는지", async () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    vi.spyOn(window, "confirm").mockReturnValue(true);

    const applicantButton = screen.getAllByText("열람하기")[1];
    fireEvent.click(applicantButton);

    expect(screen.getByText("🎨 지원서")).toBeInTheDocument();
    expect(screen.getAllByText("Chandler").length).toBeGreaterThan(1);

    const acceptButton = screen.getByText("수락");
    fireEvent.click(acceptButton);

    await waitFor(() => {
      expect(screen.getAllByText("수락됨").length).toBeGreaterThan(2);
    });

    await waitFor(() => {
      expect(screen.queryByText("🎨 지원서")).not.toBeInTheDocument();
    });

    expect(window.confirm).toHaveBeenCalled();
  });

  it("수락 버튼 클릭 시 confirm 창에서 취소를 누르면 상태가 변경되지 않는지", async () => {
    render(<ApplicationsSection initialApplications={applicationData} />);

    window.confirm = vi.fn().mockReturnValue(false);

    const applicantButton = screen.getAllByText("열람하기")[1];
    fireEvent.click(applicantButton);

    const acceptButton = screen.getByText("수락");
    fireEvent.click(acceptButton);

    expect(window.confirm).toHaveBeenCalled();

    const cancelButton = screen.getByLabelText("modal-close-button");
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.queryByText("🎨 지원서")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Chandler")).toBeInTheDocument();
      expect(screen.getByText("대기 중")).toBeInTheDocument();
    });
  });
});
