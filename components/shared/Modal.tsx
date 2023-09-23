'use client';

type Props = {
	showModal: Boolean; // BOOLEAN!
	header?: React.ReactNode; // HEADER!
	body?: React.ReactNode; // BODY!
};

export default function Modal({ showModal, header, body }: Props) {



	return (
		<>
			{/* ONLY SHOW IF USER WANTS TO SHOW ON SCREEN! */}
			{showModal && (
				<section className="fixed inset-0 bg-red-900/20 flex items-center justify-center">
					<div className="w-full h-full md:w-3/6 lg:w-2/5 xl:w-2/6 flex items-center justify-center ">
						<div className="rounded-lg flex flex-col bg-white w-full overflow-hidden">
							{/* HEADER */}
							<div className="py-2 px-2 border-b text-black text-lg font-semibold">
								{header}
							</div>

							{/* BODY */}
							<div className="mt-2">{body}</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
