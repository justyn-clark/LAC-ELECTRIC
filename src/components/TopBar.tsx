import { getContent } from "../content";
import Icon from "./Icon";

export default function TopBar() {
	const { contact } = getContent();
	return (
		<header className="hidden flex-col items-center justify-between bg-[#1e283a] px-4 py-2 text-white sm:flex sm:h-[50px] sm:flex-row sm:px-7 md:px-20">
			<div className="social flex items-center flex-1 gap-3">
				<a
					href="https://www.instagram.com/Lacelectric"
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<Icon icon="instagram" />
				</a>
				<a
					href="https://www.facebook.com/francisco.larin.1675"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<Icon icon="facebook" />
				</a>
				<a
					href="https://www.linkedin.com/company/lac-electric-inc"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn"
				>
					<Icon icon="linkedin" />
				</a>
				<a
					href="https://www.yelp.com/biz/lac-electric-van-nuys"
					target="_blank"
					rel="noopener"
					aria-label="Yelp"
				>
					<Icon icon="yelp" />
				</a>
			</div>
			<div className="contactInfo flex items-center justify-center gap-4">
				<a
					className="flex items-center justify-center"
					rel="noopener"
					aria-label={contact.address}
					target="_blank"
					href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/@34.2130952,-118.4642288,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29735e4345219:0x6de4b7273310ba9d!8m2!3d34.2130952!4d-118.4620401"
				>
					<Icon icon={"marker"} padding="0 0.5rem 0 0" />
					{contact.address}
				</a>
				<p className="flex items-center justify-center">
					<Icon icon={"envelope"} padding="0 0.5rem 0 0" />
					{contact.email}
				</p>
				<p className="flex items-center justify-center">
					<Icon icon={"phone"} padding="0 0.5rem 0 0" />
					{contact.phone}
				</p>
			</div>
		</header>
	);
}
