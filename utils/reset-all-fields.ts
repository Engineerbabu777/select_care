// FIND THE SELECTED-ONE AND RETURN TO ORIGINAL STATE!

export const reset = (
	roleMode: boolean,
	role: any,
	setRole: any,
	employee: any,
	setEdit: any,
	setEmployee: any,
) => {
	// IF ROLE IF YES DO FOR ROLE
	if (roleMode) {
		setRole({
			...role,
			selectedRole: role?.roles.find(
				(rol: any) => rol?._id === role?.selectedRole?._id
			),
		});
		setEdit(false);
		return;
	}

	// ELSE DO FOR EMPLOYEE!

	setEmployee({
		...employee,
		selectedOne: employee.employees.find(
			(emp: any) => employee.selectedOne._id === emp._id
		),
	});
	setEdit(false);
};
