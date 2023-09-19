


// FUNCTION TO UPDATE STATES (-)!
export const onChangeHandler = (
	e: React.ChangeEvent<HTMLInputElement>,
	setRole: any,
	role: any
) => {

	//SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
    setRole({ ...role, [e.target.name]: e.target.value });
    
};
