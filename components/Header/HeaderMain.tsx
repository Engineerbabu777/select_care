
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function HeaderMain() {
	return (
		<header className="flex justify-between items-center px-2 md:px-4 lg:px-6 bg-[#C63D2F] text-white py-2">
			{/* LEFT_SIDE */}
				<LeftSide />
		

			{/* RIGHT_SIDE */}
				<RightSide />
	
		</header>
	);
}
