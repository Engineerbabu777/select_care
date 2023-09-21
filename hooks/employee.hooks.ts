import { employeeState } from "@/recoil/employeeState";
import { employeeValidation } from "@/utils/user/employeeValidations";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

export default function useEmployee() {
	const [users, setUsers] = useRecoilState(employeeState); // CHANGE TO EMPLOYEE!

	// GET ALL ROLES!
	const getEmployees = () => {
		setUsers({ ...users, loadingEmployees: true });
		try {
			// MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
			fetch("/api/employee")
				.then((response: any) => {
					response.json().then((data: any) => {
						setUsers({
							employees: data?.employees, // SETTING ALL EMPLOYEES
							totalNumberOfEmployee: data?.employees?.length, // SETTING TOTAL NUMBER OF EMPLOYEES!
							loadingEmployees: false, // LOADING STATE!
							selectedOne: null, // SELECTED EMPLOYEE INITIAL STATE!
							assigned: data?.employees?.filter((emp:any) => emp?.role !== null), // ANY ROLE!
							nonAssigned: data?.employees?.filter((emp: any) => emp?.role === null), // NO-ROLE EMPLOYEES
						});
						console.log("CLIENT EMPLOYEE->", data);
					});
				})
				.catch((err: any) => {
					setUsers({ ...users, loadingEmployees: false });
					// WILL WRITE HERE LATER  MORE !!!
				});
		} catch (err: any) {}

		// VALIDATE IF ERROR EXITS OR NOT !!
	};

	// CREATE NEW ROLE!
	const createNewEmployee = async (user: any) => {
		try {
			const validator = employeeValidation(
				user.firstName,
				user.lastName,
				user.email
			);

			// MAKE A POST REQUEST TO SAVE DATA IN OUR DATABASE!
			if (validator) {
				fetch("/api/employee", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json",
					},
					body: JSON.stringify(user),
				}).then((response: any) =>
					response.json().then((data: any) => {
						setUsers({ ...users, employees: data?.employees });
					})
				);
				getEmployees();
				return { success: true, message: "Employee created successfully!" };
			}
		} catch (err: any) {
			return { error: true, message: err.message };
		}
	};

	// DELETE ANY ROLE!
	const deleteEmployee = (id: string) => {
		try {
			// DELETE FROM STATE!
			setUsers({
				...users,
				employees: users?.employees.filter((u: any) => u._id !== id),
				selectedOne: null,
			}); // THAT WILL REMOVE DELETION ID AND MAKE SELECTED NULL ON RIGHT SIDE!

			// WE CAN ALSO CHECK FROM OUR STATE THAT IF ID IS AVAILABLE THEN REMOVE FROM DATABASE OTHERWISE NOT MAKE A DELETE REQUEST! (IN FUTURE!) !

			// OTHERWISE DELETE REQUEST!
			fetch("/api/employee?id=" + id, { method: "DELETE" }).then(
				(response: any) =>
					response.json().then((data: any) => console.log(data))
			);

			toast.success("DELETION SUCCESSFUL!");

			// THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
			// getEmployees();
		} catch (error: any) {
			console.log("DELETION ERROR:-> ", error.message);
		}
	};

	// EDIT ANY ROLE!
	const editEmployee = async () => {
		const { firstName, lastName, email, role, _id } = users.selectedOne;

		// console.log('NEW ROLE ID', role._id, "ACTUAL ROLE: ",role,users.selectedOne);

		try {
			const validator = employeeValidation(firstName, lastName, email);
			const body = {
				firstName,
				lastName,
				email,
				role,
				_id,
			};
			// EVERTING IS OK!
			// PUT REQUEST!
			if (validator) {
				fetch("/api/employee", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json",
					},
					body: JSON.stringify(body),
				})
					.then((response: any) =>
						response.json().then((data: any) => console.log(data))
					)
					.catch((er: any) => console.log(er?.message));
			}

			toast.success("EDIT SUCCESSFUL!");
			getEmployees(); // GETTING FRESH EMPLOYEES!
			return { success: true, message: "Employee updated successfully!" };
		} catch (error: any) {
			toast.error(error.message); // GIVING TOAST ERROR!
			// console.log('ERROR: ', error.message);
		}
	};

	return {
		createNewEmployee,
		users,
		getEmployees,
		deleteEmployee,
		editEmployee,
	};
}
