"use client";

import Card from "@/components/shared/Card";
import { employeeState } from "@/recoil/employeeState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PulseLoader } from "react-spinners";
import Heading from "@/components/shared/Heading";
import useRole from "@/hooks/role.hooks";
import useEmployee from "@/hooks/employee.hooks";
import TopDetails from "@/components/shared/TopDetails";

export default function UserMain() {
	const [employee, setEmployee] = useRecoilState(employeeState);
	const { getRoles } = useRole();
	const { getEmployees } = useEmployee();

	useEffect(() => {
		getRoles();
		getEmployees();
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

						{/* IF EMPLOYEES LENGTH IS LESS THAN 1 THAN WILL SHOW SOME TEXT AS WELL(END!)! */}

						{/* LIST OF EMPLOYEES! */}
						{!employee.loadingEmployees && (
							<div className="flex flex-col overflow-hidden mb-2 mt-1 mx-2">
								{/* TOP SMALL HEADING! */}
								<TopDetails
									length={employee?.totalNumberOfEmployee as number}
									smallHeading={"Employees"}
								/>
								{/* TABLE TYPE DETAILS! */}
								<div className="border-gray-300 bg-gray-50 overflow-auto custom-scroll">
									<div className=" flex-1  ">
										{employee?.employees?.length > 0 &&
											employee?.employees.map((user: any) => (
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
							</div>
						)}
					</div>
				</Card>
			</div>
		</>
	);
}
