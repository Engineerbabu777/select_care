"use client";

import Card from "@/components/shared/Card";
import { roles } from "@/constants/data";
import useRole from "@/hooks/role.hooks";
import { useEffect } from "react";
import { roleState } from "@/recoil/roleState";
import { useRecoilState } from "recoil";
import { PulseLoader } from "react-spinners"; //IF NEEDED WILL PUSH TO NEW FILE!
import Heading from "@/components/shared/Heading";

export default function RoleMain() {
	const { getRoles } = useRole();

	const [role, setRole] = useRecoilState(roleState);

	useEffect(() => {
		getRoles();
	}, []);

	return (
		<>
			<div className="flex w-full h-full">
				<Card>
					<div className="h-full flex flex flex-col">
						{/* HEADER */}
						<Heading heading={"Manage Roles"}/>

						{/* LOADING STATE IF GETTING DATA! */}
						{role.loadingRoles && (
							<div className="flex h-full items-center justify-center border-gray-300 bg-gray-50 m-2 ">
								<div className="flex gap-2 items-center">
									<span className="text-[#E55604] font-semibold text-lg">
										Please wait
									</span>
									<PulseLoader size={18} color={"#E55604"} />
								</div>
							</div>
						)}

						{/* LIST OF USERS! */}
						{!role.loadingRoles && (
							<div className="border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll ">
								<div className=" flex-1  ">
									{role?.roles?.length > 0 &&
										role?.roles?.map((r: any, ind: number) => (
											<div
												key={ind}
												className="text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2"
											>
												<h1 className="hover:underline">{r?.title}</h1>
											</div>
										))}
								</div>
							</div>
						)}
					</div>
				</Card>
			</div>
		</>
	);
}
