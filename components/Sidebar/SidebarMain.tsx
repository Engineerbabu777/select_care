"use client";

import Card from "../shared/Card";
import IconComponent from "../shared/IconComponent";
import {
	AiOutlineLine,
	FaIdCardClip,
	IoIosAddCircle,
	MdEngineering,
	RiGroup2Fill,
} from "@/icons/icons";
import { useRecoilState } from "recoil";
import { displayStateAtom } from "@/recoil/display-state";
import { useState } from "react";
import Modal from "../shared/Modal";
import UserModalBody from "../Modals/User/Body";
import RoleModalBody from "../Modals/Role/Body";

export default function SidebarMain() {

	// WILL REMOVE DIVISIONS AT END AS WELL CREATE COMPONENT FOR ICON-DIV!
	const [display, setDisplay] = useRecoilState(displayStateAtom);
	const [isOpen, setIsOpen] = useState(false);


	// FUNCTION FOR SHOW/NO-SHOW MODAL! (WILL MOVE THIS TO UTILS!)
	const toggleModal = () => {
		setIsOpen(!isOpen); // TOGGLING THE STATE!
	};

	return (
		<>
			{/* SHOW MODAL IF NEEDED! */}
			<Modal
				showModal={isOpen}
				header={
					// HEADING OF MODAL BASED ON CURRENT DISPLAY STATE!
					display.display === "USER" ? "Create New User" : "Create New Role"
				}
				body={
					// BODY OF MODAL BASED ON CURRENT DISPLAY STATE!
					display.display === "USER" ? (
						<UserModalBody closeModal={toggleModal} />
					) : (
						<RoleModalBody closeModal={toggleModal} />
					)
				}
			/>

			<div className="w-full max-w-[3rem] mx-auto h-full flex">
				<Card>
					<div className="mt-4 px-1 gap-2 flex flex-col items-center  ">
						{/* TO ADD USERS/ROLES! */}
						<div className="">
							<IconComponent
								isClickable={display.display === 'USER' || display.display === 'ROLE'}
								onClick={toggleModal}
								aside
								icon={
									<IoIosAddCircle className={"w-8 m-1 h-8 text-[#016A70]"} />
								}
							/>
						</div>

						<hr className=" bg-gray-500 w-8" />

						{/*TO DISPLAY USERS IN LEFT SECTION! */}
						<div className="-mb-1">
							<IconComponent
								isClickable
								onClick={() => setDisplay({ ...display, display: "USER" })}
								aside
								icon={
									<RiGroup2Fill
										className={
											"w-7 h-7 m-1.5 " +
											(display?.display === "USER" ? "text-orange-800" : "")
										}
									/>
								}
							/>
						</div>

						{/*TO DISPLAY ROLES IN LEFT SECTION */}
						<div className="">
							<IconComponent
								isClickable
								onClick={() => setDisplay({ ...display, display: "ROLE" })}
								aside
								icon={
									<FaIdCardClip
										className={
											"w-6 h-6 m-2 " +
											(display?.display === "ROLE" ? "text-orange-800" : "")
										}
									/>
								}
							/>
						</div>

						{/* WILL SHOW MORE ICONS FOR ROLES SIGNED/UNSIGNED ON RIGHT-SIDE! */}

						{/* DEVELOPER INFO! */}
						<div className="">
							<IconComponent
								isClickable
								onClick={() => setDisplay({ ...display, display: "DEV" })}
								aside
								icon={
									<MdEngineering
										className={
											"w-6 h-6 m-2 " +
											(display?.display === "DEV" ? "text-orange-800" : "")
										}
									/>
								}
							/>
						</div>

						
					</div>
				</Card>
			</div>
		</>
	);
}
