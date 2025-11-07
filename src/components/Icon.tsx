import {
	FaEnvelope,
	FaExpandAlt,
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { ImLinkedin2, ImYelp } from "react-icons/im";

type IconProps = {
	icon:
		| "instagram"
		| "facebook"
		| "linkedin"
		| "yelp"
		| "envelope"
		| "marker"
		| "phone"
		| "arrow-circle-o-right"
		| "expand";
	className?: string;
	color?: string;
	padding?: string;
	size?: string;
};

const renderIcon = (icon: IconProps["icon"]) => {
	switch (icon) {
		case "instagram":
			return <FaInstagram />;
		case "facebook":
			return <FaFacebook />;
		case "linkedin":
			return <ImLinkedin2 />;
		case "yelp":
			return <ImYelp />;
		case "envelope":
			return <FaEnvelope />;
		case "marker":
			return <FaMapMarkerAlt />;
		case "phone":
			return <FaPhoneAlt />;
		case "arrow-circle-o-right":
			return <HiOutlineArrowCircleRight />;
		case "expand":
			return <FaExpandAlt />;
		default:
			return null;
	}
};

export default function Icon({
	className = "",
	color,
	padding,
	size,
	icon,
}: IconProps) {
	const iconColor = color || "currentColor";
	const iconSize = size || "1em";
	return (
		<span
			className={`inline-flex ${className}`}
			style={{ padding, color: iconColor }}
		>
			<span style={{ fontSize: iconSize }}>{renderIcon(icon)}</span>
		</span>
	);
}
