

type Props = {
	label?: String;
	name?: String;
	placeholder?: String;
	type?: String;
	require?: Boolean;
};

export default function Input({
	label,
	name,
	placeholder,
	type,
	require = false,
}: Props) {

    
	return (
		<>
			{/* LABEL! */}
			<label
				htmlFor={name}
				className="text-md font-semibold text-gray-500 -mb-2"
			>
				{label}
			</label>
			{/* INPUT! */}
			<input
				required={require}
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				className="px-2 py-1 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 text-gray-700 w-full border border-green-500"
			/>
		</>
	);
}
