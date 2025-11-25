import { H1 } from "../components/Headings";
import HR from "../components/HR";
import Icon from "../components/Icon";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";

export default function Contact() {
	const { contact, seo } = getContent();
	const applicationPDF = "/LAC_Job_Application_Form.pdf";

	return (
		<>
			<SEO
				title={seo.contact.title}
				description={seo.contact.description}
				keywords={seo.contact.keywords}
			/>
			<PageInnerWrap className="py-4 text-center">
				<H1>{contact.pageTitle}</H1>
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
				<p className="mb-0">
					{contact.careerText}{" "}
					<a
						rel="noopener"
						aria-label="Application"
						href={applicationPDF}
						target="_blank"
						className="text-[#1e283a] underline hover:text-[#f20079]"
					>
						{contact.careerLink}
					</a>{" "}
					{contact.careerTextEnd}
				</p>
			</PageInnerWrap>
		</>
	);
}
