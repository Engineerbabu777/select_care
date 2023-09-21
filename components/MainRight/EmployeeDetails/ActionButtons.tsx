type Props = {
	setEmployee: any;
	setEdit: any;
	employee: any;
    edit: any;
    editEmployee: () => void;
};

export default function ActionButtons({
	setEmployee,
	employee,
	edit,
    setEdit,
    editEmployee,
}: Props) {
	return (
		<>
			<div className="flex w-full py-4">
				<div className="flex justify-between items-center w-full">
					<button
						className=" text-blue-500 bg-blue-100 hover:bg-blue-200 uppercase font-semibold rounded-full tracking-[0.08rem] px-4 py-1"
						type="button"
						onClick={() => {
							// FIND THE SELECTED-ONE AND RETURN TO ORIGINAL STATE!
							setEmployee({
								...employee,
								selectedOne: employee.employees.find(
									(emp: any) => employee.selectedOne._id === emp._id
								),
							});
							setEdit(false);
						}}
					>
						Reset
					</button>
					<button
						className="rounded-full font-semibold text-green-500 bg-green-100 hover:bg-green-200 tracking-[0.08rem] px-4 py-1"
						type="button"
						onClick={() => {
							editEmployee();
							setEdit(false);
						}} // DATA IS ALREADY IN OUR STATE!
					>
						Save
					</button>
				</div>
			</div>
		</>
	);
}
