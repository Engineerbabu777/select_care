import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function Card({ children }: Props) {
	return (
		<>
			<section className="bg-white rounded-md shadow-md my-2 w-full">
				{children}
			</section>
		</>
	);
}
