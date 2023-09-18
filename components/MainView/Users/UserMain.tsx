import Card from "@/components/Card";
import { uniqueUsernames } from "@/constants/data";

export default function UserMain() {
	return (
		<>
			<div className="flex w-full h-full">
				<Card>
					<div className="h-full flex flex-col ">
						
            {/* HEADER */}
						<div className="border-b px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700  flex">
							<h1 className="">Manage Users</h1>
						</div>

						{/* LIST OF USERS! */}
						<div className="border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll">
							<div className=" flex-1  ">
								{uniqueUsernames.map((user) => (
									<div
										key={user}
										className="text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2"
									>
										<h1 className="hover:underline">{user.username}</h1>
									</div>
								))}
							</div>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
