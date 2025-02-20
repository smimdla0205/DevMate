import React from "react";

import MyPage from "../../app/user/mypage/page";

import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("컴포넌트 테스트", () => {
  it("App 렌더링 테스트", () => {
    render(<MyPage />);

    // 요소가 존재하는지만 확인
    screen.getByText("MyPage"); // 요소가 없으면 자동으로 테스트 실패
  });
});
