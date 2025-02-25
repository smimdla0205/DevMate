import type { Comment } from "@/domain/entities/comment";

import CommentContent from "../../../app/(anon)/recruitments/[id]/_components/CommentContent";

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

const mockComment: Comment = {
  id: 1,
  user: {
    id: "1",
    email: "test@example.com",
    password: "password",
    name: "길동이",
    nickname: "길동이",
    profileImg: "",
    address: "Seoul",
    birthDate: new Date(),
    gender: "male",
    position: "Developer",
    career: 5,
    createdAt: new Date(),
  },
  content: "테스트 댓글",
  createdAt: new Date(),
  projectId: 1,
};

describe("CommentContent", () => {
  it("댓글 내용이 정상적으로 렌더링 되는지", () => {
    render(<CommentContent comment={mockComment} />);
    expect(screen.getByText("테스트 댓글")).toBeInTheDocument();
    expect(screen.getByText("길동이")).toBeInTheDocument();
  });

  it("대댓글 버튼 클릭 시 폼이 나타나는지", () => {
    render(<CommentContent comment={mockComment} />);
    const replyButton = screen.getByText("대댓글");
    fireEvent.click(replyButton);
    expect(screen.getByPlaceholderText("댓글을 작성해보세요.")).toBeInTheDocument();
  });
});
