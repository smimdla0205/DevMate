import type { ReactNode } from "react";

import Header from "@/components/header/Header";

export default function AnonLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>
        <main style={{ paddingTop: "64px" }}>{children}</main>
      </div>
      <footer>푸터</footer>
    </>
  );
}
