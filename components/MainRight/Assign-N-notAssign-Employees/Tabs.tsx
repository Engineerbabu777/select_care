type Props = {
	currentTab: any;
	setCurrentTab: any;
};

export default function Tabs({ currentTab, setCurrentTab }: Props) {
	return (
		<>
			<div className=" flex gap-1 text-center items-center text-sm text-semibold m-1 ">
				{/* ASSIGN! */}
				<div
					className={
						"flex-1 font-semibold py-4 cursor-pointer hover:bg-gray-100  " +
						(currentTab === "assign"
							? " border-b-2 border-blue-500 text-blue-500 "
							: " text-gray-500 border-white border-b-2")
					}
					onClick={() => setCurrentTab("assign")}
				>
					ASSIGNED
				</div>

				{/* UNASSIGN */}
				<div
					className={
						"flex-1 font-semibold py-4 cursor-pointer hover:bg-gray-100  " +
						(currentTab === "not-assign"
							? " border-b-2 border-blue-500 text-blue-500"
							: " text-gray-500 border-white border-b-2")
					}
					onClick={() => setCurrentTab("not-assign")}
				>
					UNASSIGNED
				</div>
			</div>
		</>
	);
}
