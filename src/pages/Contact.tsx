import HR from "../components/HR";
import Icon from "../components/Icon";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";

export default function Contact() {
	const { contact } = getContent();
	const applicationPDF = "/LAC_Job_Application_Form.pdf";

	return (
		<>
			<SEO
				title="Contact Us"
				description="Contact LAC Electric Inc. at 7821 Noble Ave., Van Nuys, CA 91405. Call (818) 994-9701 or email info@lacelectric.com for electrical services in Los Angeles County."
				keywords="contact LAC Electric, Van Nuys electrician, Los Angeles electrical contractor contact, electrical services phone number, LAC Electric address"
			/>
			<PageInnerWrap className="py-4 pb-16 text-center">
				<h1>Contact Us</h1>
				<HR />
				<div className="wrap flex flex-col justify-evenly gap-12 py-16 sm:flex-row">
					<div className="item address mb-12 flex w-full flex-col items-center sm:mb-0">
						<a
							href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/"
							target="_blank"
							rel="noopener"
							className="flex flex-col items-center text-[#1e283a] no-underline"
						>
							<Icon icon="marker" size="89px" color="#1e283a" />
							<p className="mt-4">{contact.address}</p>
						</a>
					</div>
					<div className="item mb-12 flex w-full flex-col items-center sm:mb-0">
						<Icon icon="envelope" size="89px" color="#1e283a" />
						<p className="mt-4">{contact.email}</p>
					</div>
					<div className="item mb-12 flex w-full flex-col items-center sm:mb-0">
						<Icon icon="phone" size="89px" color="#1e283a" />
						<p className="mt-4">{contact.phone}</p>
					</div>
				</div>
				<p>
					For career opportunities please download this application{" "}
					<a
						rel="noopener"
						aria-label="Application"
						href={applicationPDF}
						target="_blank"
						className="text-[#1e283a] underline hover:text-[#f20079]"
					>
						PDF
					</a>{" "}
					file, fill it and send it to our email!
				</p>
			</PageInnerWrap>
		</>
	);
}
