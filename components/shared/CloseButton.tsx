import { MdClose } from "@/icons/icons";

type Props = {
	onClick: () => void;
};

export default function CloseButton({ onClick }: Props) {
	return (
		<>
			<button
				type="button"
				className="flex py-2 text-red-700 hover:text-white hover:bg-red-400 transition duration-300 gap-2 items-center justify-center bg-red-300 shadow-sm rounded-md w-full"
				onClick={onClick}
			>
				{/* ICON! */}
				<MdClose className="w-4 h-4 " />
                {/* TEXT! */}
                <p className="text-md font-bold ">Close</p>
			</button>
		</>
	);
}
