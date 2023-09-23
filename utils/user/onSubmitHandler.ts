
import toast from 'react-hot-toast';
import React, { SetStateAction } from 'react';

// WILL CHANGE ANY TYPES TO THEIR TYPES LATER!

// THIS ON SUBMIT HANDLER WILL HANDLE NEW EMPLOYEES/USERS TO BE CREATED!
export const onSubmitHandlerEmployee = async (
	createNewEmployee:(user:any)=>Promise<any>,
	setLoading:React.Dispatch<SetStateAction<boolean>>,
	setUser:any,
	closeModal: ()=>void,
	user:any,
) => {
	setLoading(true);
	const data = await createNewEmployee(user);  // CREATING NEW EMPLOYEE/USER!

    // IF SOME ERROR NOTIFICATION!
	if (data?.error) {
		toast.error(data?.message); // WILL CONVERT THIS TO JSX!(MAKE OUR OWN TOAST!)
		setLoading(false);
		return;
	}

    // FOR SUCCESS NOTIFICATION!
	if (data?.success) {
		toast.success(data?.message);
		setLoading(false);
		setUser({ firstName: "", lastName: "", role: "", email: "" });
		closeModal();
	}
};
