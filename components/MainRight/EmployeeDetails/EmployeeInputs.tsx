


type Props = {
	onChangeData: any;
	employee: any;
};

export default function EmployeeInputs({ onChangeData, employee }: Props) {
	return (
		<>
			{/* FIRST_NAME */}
			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="firstName">
					First Name
				</label>
				<input
					className="w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300"
					placeholder="John"
					name="firstName"
					id="firstName"
					type="text"
					value={employee.selectedOne.firstName}
					onChange={onChangeData}
				/>
			</div>

			{/* LAST_NAME */}

			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="firstName">
					Last Name
				</label>
				<input
					className="w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300"
					placeholder="Doe"
					name="lastName"
					id="lastName"
					type="text"
					value={employee?.selectedOne?.lastName}
					onChange={onChangeData}
				/>
			</div>

			{/* EMAIL! */}

			<div className="flex gap-1 flex-col">
				<label className="text-gray-600 text-sm" htmlFor="email">
					Email Address
				</label>
				<input
					className="w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300"
					placeholder="example@gmail.com"
					name="email"
					id="email"
					type="email"
					value={employee.selectedOne.email}
					onChange={onChangeData}
				/>
			</div>
		</>
	);
}
