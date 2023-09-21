import { useState } from "react";
import Tabs from "./Tabs";
import { useRecoilState } from "recoil";
import { employeeState } from "@/recoil/employeeState";

export default function EmpTabsMain() {
	const [currentTab, setCurrentTab] = useState("assign");

	const [employees, setEmployees] = useRecoilState(employeeState);

	return (
		<>
			{
				<div className="w-full h-full overflow-hidden rounded-md">
					{/* TABS HANDLE BY STATES! */}
					<Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

					{/* DATA TO SHOW RELATED TO CURRENT STATE! */}
					{currentTab === "assign" && (
						<>
							<div className="flex h-full w-full bg-gray-50 overflow-auto flex-col mt-1">
								{employees.assigned.map((emp: any, ind: number) => (
									<>
										<div
											key={ind}
											className=" cursor-pointer flex justify-between hover:bg-gray-200 transition-all duration-300 items-center px-2 py-1 border-b border-gray-300"
										>
											<div className="flex flex-col ">
												{/* FULL NAME! +!! */}

												<p className="font-semibold text-gray-700">
													{emp?.firstName} {emp?.lastName}
												</p>
												{/* EMAIL! +!! */}

												<p className="text-sm text-gray-400">{emp?.email}</p>
											</div>
											{/* ROLE */}
											<div className="">
												<p className="flex items-center gap-1">
													{/* <span className="text-sm text-blue-600">Role:</span> */}
													<span className="font-semibold hover:underline text-blue-500">
														{emp?.role?.title}
													</span>
												</p>
											</div>
										</div>
									</>
								))}
							</div>
						</>
					)}
					{currentTab === "not-assign" && (
						<>
							<div className="flex h-full w-full bg-gray-50 overflow-auto flex-col mt-1">
								{employees.nonAssigned.map((emp: any, ind: number) => (
									<>
										<div
											key={ind}
											className=" cursor-pointer flex justify-between hover:bg-gray-200 transition-all duration-300 items-center px-2 py-1 border-b border-gray-300"
										>
											<div className="flex flex-col ">
												{/* FULL NAME! +!! */}

												<p className="font-semibold text-gray-700">
													{emp?.firstName} {emp?.lastName}
												</p>
												{/* EMAIL! +!! */}

												<p className="text-sm text-gray-400">{emp?.email}</p>
											</div>
											{/* ROLE */}
											<div className="">
												<p className="flex items-center gap-1">
													{/* <span className="text-sm text-blue-600">Role:</span> */}
													<span className="font-semibold hover:underline text-blue-500">
														nill
													</span>
												</p>
											</div>
										</div>
									</>
								))}
								{employees.nonAssigned.length < 1 && <>Nothing to show</>}
							</div>
						</>
					)}
				</div>
			}
		</>
	);
}
