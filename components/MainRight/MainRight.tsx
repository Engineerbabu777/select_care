import { useRecoilState } from "recoil";
import Card from "../shared/Card";
import { displayStateAtom } from "@/recoil/display-state";

export default function MainRight() {
	const [display, setDisplay] = useRecoilState(displayStateAtom);

	return (
		<>
			<div className="h-full w-full flex ">
				<Card>
					<div className="h-full w-full">
						{/* SEE IF DISPLAY STATE IS USER! */}
						{display?.display === "USER" && display?.right === "" && (
							<>user details</>
						)}

						{/* CHECK IF DISPLAY-STATE IS USER THEN SHOW SIGNED UNSIGNED! */}
						{display?.display === "USER" && display?.right === "SUNSUSER" && (
							<>SUNSUSER</>
						)}

						{/* SEE IF DISPLAY STATE IS ROLE! */}
						{(display?.display === "ROLE" && display?.right === "") && <>role details</>}

						{/* CHECK IF DISPLAY-STATE IS ROLE THEN SHOW ALL ROLES WITH ASSIGNED EMPLOYEES (JUST NUMBER)! */}
						{display?.display === "ROLE" && display?.right === "SUNSROLE" && (
							<>SUNSROLE</>
						)}
					</div>
				</Card>
			</div>
		</>
	);
}
