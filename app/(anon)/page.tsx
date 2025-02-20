"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Service</h1>
      <nav>
        <Link href="/login">Login</Link>
        <br />
        <Link href="/signup">Sign Up</Link>4
        <br />
        <Link href="/recruitments">Recruitments</Link>
      </nav>
    </div>
  );
}
