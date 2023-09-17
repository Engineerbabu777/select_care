

import {
	MdNotifications,
	BiSolidUserCircle,
	PiChatsBold,
	GrApps,
    MdOutlineApps
} from "@/icons/icons";
import IconComponent from "../IconComponent";

export default function RightSide({}) {
	return (
		<>
			<div className="flex gap-2 items-center">
				<IconComponent icon={<MdNotifications className={"w-6 h-6"} />} />

				<IconComponent icon={<PiChatsBold className={"w-6 h-6"} />} />

				<IconComponent icon={<MdOutlineApps className={"w-6 h-6 "} />} />

				<IconComponent icon={<BiSolidUserCircle className={"w-6 h-6"} />} />
			</div>
		</>
	);
}
