"use client";

import Image from "next/image";

export default function LeftSide({}) {
	return (
		<>
			<div className="flex gap-3 items-center">
				{/* IMAGE! */}
				<Image
					src={"/images/logo2.png"}
					alt={"logo-alt"}
					priority
					quality={95}
					width={35}
					height={35}
				/>

				{/* TEXT */}
				<div className="flex gap-2 items-center text-lg text-gray-100">
					<h2 className="font-bold ">Select Care</h2>
					<span className="hidden md:flex gap-2 items-center font-semibold">
						<span>|</span>
						<h3>Senior</h3>
						<span>&gt;</span>
						<h3>Admin</h3>
					</span>
				</div>
			</div>
		</>
	);
}
