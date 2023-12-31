"use client";

import Card from "../shared/Card";
import IconComponent from "../shared/IconComponent";
import {
	MdCompost,
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
import { ModalState } from "@/recoil/modelState";
import SidebarFixedBarIcons from "../shared/SidebarFixedBarIcons";

export default function SidebarMain() {
	// WILL REMOVE DIVISIONS AT END AS WELL CREATE COMPONENT FOR ICON-DIV!
	const [display, setDisplay] = useRecoilState(displayStateAtom);
	const [modalState, setModalState] = useRecoilState(ModalState);
	
	// FUNCTION FOR SHOW/NO-SHOW MODAL! (WILL MOVE THIS TO UTILS!)
	const toggleModal = () => {
		setModalState({...modalState,isOpen:!modalState.isOpen}); // TOGGLING THE STATE!
	};

	return (
		<>
			{/* SHOW MODAL IF NEEDED! */}
			<Modal
				showModal={modalState.isOpen}
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
					{/* SIDE-BAR-ICONS */}
					<div className="mt-4 px-1 gap-2 flex flex-col items-center  ">
						<SidebarFixedBarIcons aside/>
					</div>
				</Card>
			</div>
		</>
	);
}
