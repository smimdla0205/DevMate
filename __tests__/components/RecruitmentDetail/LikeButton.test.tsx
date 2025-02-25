import LikeButton from "../../../app/(anon)/recruitments/[id]/_components/LikeButton";

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("LikeButton", () => {
  it("좋아요 버튼이 정상적으로 렌더링 되는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    expect(screen.getByText("🤍 10")).toBeInTheDocument();
  });

  it("좋아요 버튼 클릭 시 카운트가 증가하는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("❤️ 11")).toBeInTheDocument();
  });

  it("좋아요 버튼을 다시 클릭하면 원래대로 돌아오는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText("🤍 10")).toBeInTheDocument();
  });
});
