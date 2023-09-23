function validateEmail(email: string) {
	// CHECK IF EMAIL CONSISTS OF EMPTY SPACES THEN RETURN FALSE!
	if (email.includes(' ')) return false;

	// CHECK IF EMAIL CONTAINS @ SIGN LENGTH MUST BE EQUAL TO ONE ELSE RETURN FALSE!
	if (!(email.includes("@")) || (email.indexOf("@") !== email.lastIndexOf("@"))) return false;
		
	// CHECK IF EMAIL CONTAINS . LENGTH MUST BE ONE ELSE RETURN FALSE!
	if (!(email.includes(".")) || (email.indexOf(".") !== email.lastIndexOf("."))) return false;

	// CHECK IF . IS AFTER THE @ ELSE RETURN FALSE!
	if (email.indexOf(".") < email.indexOf("@")) return false;

	// ALSO CHECK LENGTH OF EMAIL SHOULD AT LEAST BE 7!
	if (email.length < 7) return false;

	// ELSE RETURN TRUE!
	return true;
}

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

	// CHECK FOR VALID EMAIL!
	const isValid = validateEmail(email.trim());

	if (!isValid) {
		throw new Error("Invalid Email!");
	}

	return true;
};
