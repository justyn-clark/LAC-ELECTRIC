import { getContent } from "../content";
import Icon from "./Icon";
import InnerWrap from "./InnerWrap";

export default function Footer() {
	const { contact } = getContent();
	return (
		<footer className="m-0 bg-[#1e283a] py-12">
			<InnerWrap className="mx-auto flex flex-col items-center justify-between text-center text-white sm:flex-row sm:items-end">
				<img
					src="/logo.png"
					alt="logo"
					className="logo mb-4 max-w-[101px] sm:mb-0"
				/>
				<div className="address mb-12 flex flex-col items-center leading-loose sm:mb-0 sm:self-end">
					<h3 className="mb-2 text-lg font-semibold uppercase">CONTACT</h3>
					<a
						href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/"
						target="_blank"
						rel="noopener"
						className="text-white no-underline"
						aria-label={contact.address}
					>
						{contact.address}
					</a>
					<p className="mb-0">{contact.email}</p>
					<p className="mb-0">{contact.phone}</p>
				</div>
				<div className="right flex flex-col items-center gap-4 sm:self-end">
					<div className="social flex gap-2">
						<a
							href="https://www.instagram.com/Lacelectric"
							target="_blank"
							rel="noopener"
							aria-label="Instagram"
							className="text-white no-underline hover:text-[#f20079] transition"
						>
							<Icon icon="instagram" padding="0 0.5rem" size="2rem" />
						</a>
						<a
							href="https://www.facebook.com/francisco.larin.1675"
							target="_blank"
							rel="noopener"
							aria-label="Facebook"
							className="text-white no-underline hover:text-[#f20079] transition"
						>
							<Icon icon="facebook" padding="0 0.5rem" size="2rem" />
						</a>
						<a
							href="https://www.linkedin.com/company/lac-electric-inc"
							target="_blank"
							rel="noopener"
							aria-label="LinkedIn"
							className="text-white no-underline hover:text-[#f20079] transition"
						>
							<Icon icon="linkedin" padding="0 0.5rem" size="2rem" />
						</a>
						<a
							href="https://www.yelp.com/biz/lac-electric-van-nuys"
							target="_blank"
							rel="noopener"
							aria-label="Yelp"
							className="text-white no-underline hover:text-[#f20079] transition"
						>
							<Icon icon="yelp" padding="0 0.5rem" size="2rem" />
						</a>
					</div>
					<p>© LAC ELECTRIC, INC.</p>
				</div>
			</InnerWrap>
		</footer>
	);
}
