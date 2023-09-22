'use client';

import { useState } from "react";
import Tabs from "./Tabs";
import { useRecoilState } from "recoil";
import { employeeState } from "@/recoil/employeeState";
import ShowData from "./ShowData";

export default function EmpTabsMain() {
	const [currentTab, setCurrentTab] = useState("assign");

	const [employees, setEmployees] = useRecoilState(employeeState);

	return (
		<>
			{
				<div className="w-full h-full rounded-md flex flex-col overflow-hidden p-1">
					{/* TABS HANDLE BY STATES! */}
					<Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

					{/* DATA TO SHOW RELATED TO CURRENT STATE! */}
					<div className="w-full h-full flex-1 flex-col overflow-auto custom-scroll mr-2">
						{currentTab === "assign" && (
							<>
								<ShowData employees={employees.assigned} />
							</>
						)}
						{currentTab === "not-assign" && (
							<>
								<ShowData employees={employees.nonAssigned} />
							</>
						)}
					</div>
					
				</div>
			}
		</>
	);
}
