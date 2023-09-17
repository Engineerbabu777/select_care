import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
	// SAME CLASSES WILL BE MOVE TO CSS FILE(AT END) !!!

	return (
		<>
			<main className="flex gap-2 w-full h-[100vh] mt-14">
				<section className="hidden sm:block w-[5vw] md:w-[6vw] h-full ml-2 sm:m-0 ">
					{children[0]}
				</section>

				<div className="flex-1 flex gap-2 border-2 border-blue-500 h-full ">
					<section className="flex-1 border-2 border-green-500 h-full ">
						{children[1]}
					</section>

					<section className="hidden lg:block lg:flex-1 border-2 border-gray-500 h-full">
						{children[2]}
					</section>
				</div>
			</main>
		</>
	);
}
