"use client";

import React, { useEffect } from "react";
import FixedNavbar from "../SmallNavbar/FixedNavbar";
import { useRecoilState } from "recoil";
import { displayStateAtom } from "@/recoil/display-state";
import { employeeState } from "@/recoil/employeeState";
import { roleState } from "@/recoil/roleState";

type Props = {
	children: any;
};

export default function HomeLayout({ children }: Props) {
	const [display, setDisplay] = useRecoilState(displayStateAtom);
	const [employee, setEmployee] = useRecoilState(employeeState);
	const [role, setRole] = useRecoilState(roleState);

	return (
		<>
			{/* MAIN!! */}
			<main className="flex gap-2 w-full h-full lg:h-[calc(100vh-55px)] mt-14 relative ">
				{/* SIDEBAR !! */}
				<section className="hidden lg:block w-[5vw] md:w-[6vw] h-full ml-2 sm:m-0 ">
					{children[0]}
				</section>

				{/* MAIN-CHILD-0! */}
				<div className="flex-1 flex gap-2 h-full flex-col lg:flex-row w-full">
					{/* TOP BAR! */}
					<div className="lg:hidden  lg:m-0 w-full fixed ">
						<FixedNavbar />
					</div>
					<div className="flex flex-1 gap-2 h-full mt-12 md:mt-12 lg:mt-0">
						{/* LEFT SIDE! */}
						<section
							className={`flex-1 md:h-[calc(100vh-110px)] h-[calc(100vh-100px)]  mx-4 lg:m-0 lg:h-full  
							${
								display.right === "SUNSUSER" ||
								role?.selectedRole !== null ||
								employee?.selectedOne !== null
									? "hidden md:block"
									: "block "
							}`}
						>
							{children[1]}
						</section>
						{/* RIGHT SIDE! */}
						<section
							className={` flex-1 mx-4 h-[calc(100vh-100px)] md:h-[calc(100vh-110px)] lg:h-full ${
								display.right === "SUNSUSER" ||
								role?.selectedRole !== null ||
								employee?.selectedOne !== null
									? " block  "
									: " hidden md:block"
							}`}
						>
							{children[2]}
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
