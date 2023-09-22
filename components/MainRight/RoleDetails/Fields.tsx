import { onChangeHandlerEdit } from "@/utils/role/edit-view-handler-onchange";

type Props = {
	roles: any;
	setRoles: any;
	edit: any;
};

export default function Field({ roles, setRoles, edit }: Props) {
	return (
		<>
			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="title">
					Title
				</label>
				<input
					className="w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300"
					placeholder="John"
					name="title"
					id="title"
					type="text"
					value={roles?.selectedRole?.title}
					onChange={(e: any) => onChangeHandlerEdit(e, setRoles, roles, edit)}
				/>
			</div>

			{/* DESCRIPTION */}
			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="description">
					Description
				</label>
				<textarea
					className="outline-none text-gray-500 placeholder:text-gray-300 focus:outline-none h-40 border-gray-400 hover:border-blue-500 focus:border-blue-600 border px-1 py-2 rounded-md"
					placeholder="Edit Your Description Here"
					value={roles?.selectedRole?.description}
					onChange={(e: any) => onChangeHandlerEdit(e, setRoles, roles, edit)}
					name="description"
					id={"description"}
				/>
			</div>

			{/* IS ACTIVE? */}
			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="firstName">
					Active Status
				</label>
				<p className="flex gap-2 items-center">
					<div
						onClick={() => {
							setRoles({
								...roles,
								selectedRole: {
									...roles.selectedRole,
									isActive: "true",
								},
							});
						}}
						className={`rounded-full px-6 py-1 border text-gray-500 hover:bg-gray-500 hover:text-gray-200 shadow-sm cursor-pointer 
                                        ${
																					roles?.selectedRole?.isActive ===
																					"true"
																						? " bg-gray-300 border-gray-600 "
																						: " bg-gray-100 border-gray-400"
																				}`}
					>
						Yes
					</div>
					<div
						onClick={() => {
							setRoles({
								...roles,
								selectedRole: {
									...roles.selectedRole,
									isActive: "false",
								},
							});
						}}
						className={`rounded-full px-6 py-1 border text-gray-500 hover:bg-gray-500 hover:text-gray-200 shadow-sm cursor-pointer ${
							roles?.selectedRole?.isActive === "false"
								? " bg-gray-300 border-gray-600 "
								: " bg-gray-100 border-gray-400"
						}`}
					>
						No
					</div>
				</p>
			</div>
		</>
	);
}
