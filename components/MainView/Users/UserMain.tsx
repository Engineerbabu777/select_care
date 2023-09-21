"use client";

import Card from "@/components/shared/Card";
import { uniqueUsernames } from "@/constants/data";
import useEmployee from "@/hooks/employee.hooks";
import useRole from "@/hooks/role.hooks";
import { employeeState } from "@/recoil/employeeState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PulseLoader } from "react-spinners";
import Heading from "@/components/shared/Heading";

export default function UserMain() {
	const { getRoles } = useRole();
	const { getEmployees } = useEmployee();

	const [employee, setEmployee] = useRecoilState(employeeState);

	useEffect(() => {
		getEmployees();
	}, []);

	useEffect(() => {
		getRoles();
	}, []);

	return (
		<>
			<div className="flex w-full h-full">
				<Card>
					<div className="h-full flex flex-col ">
						{/* HEADER */}
						<Heading heading={"Manage Employees"} />

						{/* LOADING STATE IF GETTING DATA! */}
						{employee?.loadingEmployees && (
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
						{!employee.loadingEmployees && (
							<div className="border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll">
								<div className=" flex-1  ">
									{employee?.employees?.length > 0 &&
										employee?.employees.map((user) => (
											<div
												onClick={() =>
													setEmployee({ ...employee, selectedOne: user })
												}
												key={user}
												className="text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2"
											>
												<h1 className="hover:underline">
													{user.firstName} {user?.lastName}
												</h1>
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
