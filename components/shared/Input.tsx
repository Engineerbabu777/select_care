"use client";

type Props = {
	label?: string;
	name?: any;
	placeholder?: string;
	type?: string;
	require?: boolean;
	onChange?: any; // WILL CHANGE THIS LATER!
};

export default function Input({
	label,
	name,
	placeholder,
	type,
	require,
	onChange,
}: Props) {
	return (
		<>
			{/* LABEL TEXT! */}
			<label
				htmlFor={name}
				className="text-md font-semibold text-gray-500 -mb-2"
			>
				{label}
			</label>

			{/* INPUT! */}
			<input
				onChange={onChange}
				required={require}
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				// WILL MAKE INPUT STYLES BEAUTIFUL BUT LATER!
				className="px-2 py-1 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-700 w-full border border-blue-500"
			/>
		</>
	);
}
