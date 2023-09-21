import toast from "react-hot-toast";

// INSTEAD OF PUTTING INLINE/IN-COMPONENT WE DO THIS! THAT WILL INCREASE (READABILITY OF CODE)!
export const onChangeHandlerEdit = (
	e: React.ChangeEvent<HTMLInputElement>,
	setEmployee: any,
	employee: any,
	edit: boolean
) => {
	// // console.log('VIEWING-> ',e?.target?.name, e?.target.value, employee.);
	// console.log('VALUE->',e.target.name,typeof(e.target.value));

	// CAN'T EDIT!
	if (!edit) {
		toast("You are in a viewing mode!", {
			icon: "👏",
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
		return;
	}

	// CAN EDIT!

	if (e.target.name === "role" && e.target.value === "") {
		setEmployee({
			...employee,
			selectedOne: {
				...employee.selectedOne, // SPREADING PREVIOUS!
				[e.target.name]: null, // CHANGING CURRENT TARGET!
			},
		});
		return;
	}

	setEmployee({
		...employee,
		selectedOne: {
			...employee.selectedOne, // SPREADING PREVIOUS!
			[e.target.name]: e.target.value, // CHANGING CURRENT TARGET!
		},
	});
};
