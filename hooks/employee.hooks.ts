import { employeeState } from "@/recoil/employeeState";
import { employeeValidation } from "@/utils/user/employeeValidations";
import { useRecoilState } from "recoil";

export default function useEmployee() {
	const [users, setUsers] = useRecoilState(employeeState);

	// GET ALL ROLES!
	const getEmployees = () => {
		setUsers({ ...users, loadingEmployees: true });

		// MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
		fetch("/api/employee")
			.then((response: any) => {
				response.json().then((data: any) => {
					setUsers({
						employees: data?.employees,
						totalNumberOfEmployee: data?.employees?.length,
						loadingEmployees: false,
					});
					console.log("CLIENT EMPLOYEE->", data);
				});
			})
			.catch((err: any) => {
				setUsers({ ...users, loadingEmployees: false });
				// WILL WRITE HERE LATER  MORE !!!
			});

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
	const deleteEmployee = () => {};

	// EDIT ANY ROLE!
	const editEmployee = () => {};

	return { createNewEmployee, users, getEmployees };
}
