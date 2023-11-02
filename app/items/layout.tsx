"use client";

import React from "react";

type ItemLayoutProps = {
	children: any;
	modal: React.ReactNode;
};

function ItemLayout({ modal, children }: ItemLayoutProps) {
	return (
		<>
			{children}
			{modal}
		</>
	);
}

export default ItemLayout;
