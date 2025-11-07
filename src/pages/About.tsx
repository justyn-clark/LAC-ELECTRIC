import HR from "../components/HR";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";

export default function About() {
	const { about } = getContent();
	return (
		<>
			<SEO
				title="About"
				description="LAC Electric Inc. Is an independent electrical contracting firm located in the heart of San Fernando Valley, California, serving the greatest Los Angeles County and neighboring cities for over 18 years and counting."
				keywords="LAC Electric, electrical contractor Los Angeles, San Fernando Valley electrician, Francisco Larin, electrical contracting firm, Los Angeles electrical services"
			/>
			<PageInnerWrap className="mx-auto w-[80vw] py-4 pb-16">
				<h1>About Us</h1>
				<HR />
				<h3 className="font-bold mb-4 text-lg">{about.info.title}</h3>
				<p className="mb-6">{about.info.desc}</p>
				<h3 className="font-bold mb-4 text-lg">{about.objectives.title}</h3>
				<p className="mb-6">{about.objectives.desc}</p>
				<p>
					Francisco Larin <br /> President <br /> <b>LAC Electric, Inc.</b>
				</p>
			</PageInnerWrap>
		</>
	);
}
