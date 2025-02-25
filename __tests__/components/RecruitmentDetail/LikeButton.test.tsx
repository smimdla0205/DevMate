import LikeButton from "../../../app/(anon)/recruitments/[id]/_components/LikeButton";

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("LikeButton", () => {
  it("좋아요 버튼이 정상적으로 렌더링 되는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    const button = screen.getByRole("button");
    // 이모지와 숫자 각각을 확인
    expect(button).toHaveTextContent("🤍");
    expect(button).toHaveTextContent("10");
  });

  it("좋아요 버튼 클릭 시 카운트가 증가하는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // 상태 변경 후 이모지와 숫자 각각을 확인
    expect(button).toHaveTextContent("❤️");
    expect(button).toHaveTextContent("11");
  });

  it("좋아요 버튼을 다시 클릭하면 원래대로 돌아오는지", () => {
    render(<LikeButton projectId={1} likes={10} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    // 상태가 원래대로 돌아온 후 확인
    expect(button).toHaveTextContent("🤍");
    expect(button).toHaveTextContent("10");
  });
});
