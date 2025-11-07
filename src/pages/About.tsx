import { H1, H3 } from "../components/Headings";
import HR from "../components/HR";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";

export default function About() {
	const { about, seo } = getContent();
	return (
		<>
			<SEO
				title={seo.about.title}
				description={seo.about.description}
				keywords={seo.about.keywords}
			/>
			<PageInnerWrap className="mx-auto w-[80vw] py-4 pb-16">
				<H1>{about.pageTitle}</H1>
				<HR />
				<H3 className="font-bold mb-4 text-lg">{about.info.title}</H3>
				<p className="mb-6">{about.info.desc}</p>
				<H3 className="font-bold mb-4 text-lg">{about.objectives.title}</H3>
				<p className="mb-6">{about.objectives.desc}</p>
				<p>
					{about.president.name} <br /> {about.president.title} <br />{" "}
					<b>{about.president.company}</b>
				</p>
			</PageInnerWrap>
		</>
	);
}
