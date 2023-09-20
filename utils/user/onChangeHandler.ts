





// FUNCTION TO UPDATE STATES (MOVE THIS TO UTILS)!
export const onChangeHandler = (
	e: React.ChangeEvent<HTMLInputElement>,
	setUser: any,
	user: any
) => {
	//SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
	setUser({ ...user, [e.target.name]: e.target.value });
};
