import {
	MdNotifications,
	BiSolidUserCircle,
	PiChatsBold,
	GrApps,
	MdOutlineApps,
} from "@/icons/icons";
import IconComponent from "../shared/IconComponent";

export default function RightSide({}) {
	return (
		<>
			<div className="flex gap-2 items-center">
				<IconComponent header icon={<MdNotifications className={"w-6 h-6"} />} />

				<IconComponent header icon={<PiChatsBold className={"w-6 h-6"} />} />

				<IconComponent header icon={<MdOutlineApps className={"w-6 h-6 "} />} />

				<IconComponent header icon={<BiSolidUserCircle className={"w-6 h-6"} />} />
        
			</div>
		</>
	);
}
