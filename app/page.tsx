
'use client';

import HomeLayout from "@/components/Home/HomeLayout";
import SidebarMain from "@/components/Sidebar/SidebarMain";
import { displayStateAtom } from "@/recoil/display-state";
import Main from "@/components/Main/Main";
import {RecoilRoot,useRecoilState} from 'recoil';
import MainRight from "@/components/MainRight/MainRight";

export default function Home() {


	// (!AUTHENTICATION) REFERS TO /LOGIN PAGE (WILL IMPLEMENT-AT-END!)!

	return (
		<RecoilRoot>
			{/* LAYOUT! */}
			<HomeLayout>

				{/* CHILD-0 OF HOME-LAYOUT!  */}
				<SidebarMain />

				{/* CHILD-1 OF HOME-LAYOUT!  */}
				 <Main />

				{/* CHILD-2 OF HOME-LAYOUT!  */}
				<MainRight />

			</HomeLayout>
		</RecoilRoot>
	);
}
