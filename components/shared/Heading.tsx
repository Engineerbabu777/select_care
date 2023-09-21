


type Props = {
    heading:string
}

export default function Heading({heading}:Props) {



    return (
			<>
				<div className="border-b px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex">
					<h1>{heading}</h1>
				</div>
			</>
		);
}