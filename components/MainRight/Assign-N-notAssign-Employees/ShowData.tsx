"use client";

type Props = {
	employees: any;
};

export default function ShowData({ employees }: Props) {
	return (
		<>
			<div className="flex h-full w-full bg-gray-50 flex-col mt-1 ">
				{employees.map((emp: any, ind: number) => (
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
									<span className="font-semibold hover:underline text-blue-500">
										{emp?.role?.title || "Nill"}
									</span>
								</p>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
}
