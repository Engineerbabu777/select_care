"use client";
import { RecoilRoot } from "recoil";
import HeaderMain from "./Header/HeaderMain";
import { Toaster } from 'react-hot-toast';


type Props = {
	children: any;
};

export default function LayoutComponent({ children }: Props) {
	return (
		<>
			<RecoilRoot>
				<Toaster />
				<HeaderMain />
				{children}
			</RecoilRoot>
		</>
	);
}
