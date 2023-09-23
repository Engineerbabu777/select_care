




export const employeeValidation = (
	first: string,
	last: string,
	email: string
) => {
	// CHECK IF USER IS EMPTY!
	if (first === "" || last === "" || email === "") {
		throw new Error("Please fill in all fields!");
	}
	// CHECK IF FIRST AND LAST NAME ARE LONG ENOUGH
	if (first.trim().length < 2 || last.trim().length < 2) {
		throw new Error("First and Last name must be at least 2 characters long");
	}
	// CHECK IF EMAIL IS NOT HERE!
	if (!email) {
		throw new Error("Email is required!");
	}

    return true;
    
};
