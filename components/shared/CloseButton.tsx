"use client";

import { MdClose } from "@/icons/icons";

type Props = {
	onClick: () => void;
};

export default function CloseButton({ onClick }: Props) {
	return (
		<>
			<button
				type="button"
				className="flex items-center gap-1 bg-gray-100 hover:bg-gray-300 border-blue-400 hover:text-red-500 text-blue-700
				transition-all duration-300 rounded-full px-4 py-1"
				onClick={onClick}
			>
				{/* ICON! */}
				<MdClose className="w-4 h-4 " />
				{/* TEXT! */}
				<p className="text-md font-bold ">Close</p>
			</button>
		</>
	);
}
