import { FaSave } from "@/icons/icons";


type Props = {
	onClick: () => void;
};

export default function SaveButton({ onClick }: Props) {


    
    // WILL CONTAIN SPINNER!
    

    return (<>
        
        	<button
				type="button"
				className="flex py-2 text-green-600 hover:text-white hover:bg-green-400 transition duration-300 gap-2 items-center justify-center bg-green-300 shadow-sm rounded-md w-full"
				onClick={onClick}
			>
				{/* ICON! */}
				<FaSave className="w-4 h-4 " />
                {/* TEXT! */}
                <p className="text-md font-bold ">Save</p>
			</button>
    
    
    </>)
}