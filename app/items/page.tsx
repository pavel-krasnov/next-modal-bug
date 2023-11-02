"use client";

import Link from "next/link";

export default function ItemPage() {
	return (
		<div>
			Item page
			<div>
				<Link href="/info/9" prefetch={false}>
					<button>Info</button>
				</Link>
			</div>
		</div>
	);
}
