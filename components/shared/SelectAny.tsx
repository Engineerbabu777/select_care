import Heading from "./Heading";



type Props = {
    title: string;
    desc: string;
}
export default function SelectAny({title, desc}:Props) {


    return (
			<>
				<div className="h-full w-full">
					<Heading heading={title} />
					<p className="px-1 py-2 text-sm text-gray-700">{desc}</p>
				</div>
			</>
		);
}