


type Props = {
    length: number;
    smallHeading: string;
}


export default function TopDetails({length, smallHeading}:Props) {


    return (
		<>
			{/* MAIN VIEW SMALL HEADER! */}
				<div className=" px-2 text-white text-sm py-1 bg-gray-600 flex justify-between items-center">
					<h3>{smallHeading} Name</h3>
					<h3>Total {smallHeading}: {length}</h3>
				</div>
			</>
		);
}