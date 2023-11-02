"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      Main page
      <div>
        <Link href="/items">
          <button>Items</button>
        </Link>
      </div>
    </div>
  );
}
