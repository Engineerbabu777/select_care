"use client";

import { FaSave } from "@/icons/icons";
import { ClipLoader } from "react-spinners";

type Props = {
	onClick: () => void;
	loading?: boolean;
	setLoading?: any;
};

export default function SaveButton({ onClick, loading = false }: Props) {
	// WILL CONTAIN SPINNER!

	return (
		<>
			<button
				disabled={loading}
				type="button"
				className={
					"flex py-2 text-green-600 hover:text-white hover:bg-green-400 transition duration-300 gap-2 items-center justify-center bg-green-300 shadow-sm rounded-md w-full"
				}
				onClick={onClick}
			>
				{!loading && (
					<>
						{/* ICON! */}
						<FaSave className="w-4 h-4 " />
						{/* TEXT! */}
						<p className="text-md font-bold ">Save</p>
					</>
				)}
				{loading && (
					<div className="text-gray-500 flex items-center text-md gap-2 font-semibold">
						<span>Please wait</span>
						<ClipLoader size={18} color={"grey"} />
					</div>
				)}
			</button>
		</>
	);
}
