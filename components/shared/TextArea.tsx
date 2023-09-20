"use client";

type Props = {
	onChange: () => void;
	placeholder: string;
	name: string;
	label: string;
	require: boolean;
};

export default function TextArea({
	onChange,
	placeholder,
	label,
	name,
	require,
}: Props) {
	return (
		<>
			<label
				htmlFor={name}
				className="text-md font-semibold text-gray-500 -mb-2"
			>
				{label}
			</label>
			<textarea
				className="no-scroll px-2 py-1 h-36 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-700 w-full border border-blue-500"
				placeholder={placeholder}
				onChange={onChange}
				name={name}
				required={require}
			/>
		</>
	);
}
