"use client";

import { updateState } from "@/utils/state-manage/handledisplayState";

type Props = {
	icon: React.ReactNode;
	hidden?: boolean;
	header?: boolean;
	aside?: boolean;
	onClick?: any;
	isClickable?: boolean;
};

export default function IconComponent({
	icon,
	header,
	aside,
	onClick,
	isClickable = false,
}: Props) {
	// UPDATE SET STATE FUNCTION MOVE TO UTILS NEXT!

	return (
		<>
			<div
				onClick={() => {
					updateState(isClickable, onClick);
				}}
				// WILL CHANGE THE CLASSES LATER!
				className={`p-1 py-1 rounded-full cursor-pointer  transition-all duration-300 
			  ${header ? "hover:text-red-700 hover:bg-gray-100" : ""} 
			  ${aside ? "hover:text-red-700 hover:bg-gray-200" : ""}`}
			>
				{icon}
			</div>
		</>
	);
}
