

import HomeLayout from "@/components/Home/HomeLayout";
import SidebarMain from "@/components/Sidebar/SidebarMain";

export default function Home() {

	// (!AUTHENTICATION) REFERS TO /LOGIN PAGE (WILL IMPLEMENT-AT-END!)!

	return (
		<>
			{/* LAYOUT! */}
			<HomeLayout>

				{/* CHILD-0 OF HOME-LAYOUT!  */}
				<SidebarMain />

				{/* CHILD-1 OF HOME-LAYOUT!  */}
				<div>2</div>

				{/* CHILD-2 OF HOME-LAYOUT!  */}
				<div>3</div>

			</HomeLayout>
		</>
	);
}
