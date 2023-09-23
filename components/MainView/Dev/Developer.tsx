/* eslint-disable @next/next/no-img-element */
import Card from "@/components/shared/Card";
import Image from "next/image";

export default function Developer() {
	return (
		<>
			<div className="w-full h-full flex">
				<Card>
					<div className="w-full h-full pt-5 px-3">
						<div className="w-full flex gap-6 items-center">
							{/* PICTURE */}
							<div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[200px] 
							lg:m-2 lg:h-[200px] rounded-full overflow-hidden ">
								<img
									src={"/images/image2.jpg"}
									alt={"alt-text"}
									className={"w-full h-full "}
								/>
							</div>

							{/* NAME */}
							<div className="">
								<h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
									Engineer Babu
								</h1>
								<h3 className="text-md md:text-lg lg:text-xl text-gray-400 font-semibold">
									Software Engineer
								</h3>
							</div>
						</div>

						{/* ABOUT ME! */}
						<div className="mt-4">
							<h1 className="text-2xl font-bold text-gray-700">About Me!</h1>
							<p className="text-gray-400">
								Passionate Next.js developer skilled in building blazing-fast
								and engaging web applications. From server-rendered pages to
								dynamic client-side interactions, I thrive on harnessing the
								power of Next.js. Proficient in React, I specialize in creating
								performant front-end interfaces. With a knack for optimizing
								user experiences and ensuring responsive designs, I&apos;m ready to
								elevate your web projects. Let&apos;s connect and bring your
								digital vision to life with Next.js!
							</p>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
