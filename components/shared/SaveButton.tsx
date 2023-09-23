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
				disabled={loading} // WILL DISABLE IF LOADING!
				type="button"
				className={
					"bg-green-200 border-green-500 text-green-600 hover:bg-green-300 flex gap-1 items-center rounded-full px-3 py-1 "
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
