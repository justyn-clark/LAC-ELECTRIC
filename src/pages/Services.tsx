import { H1, H3 } from "../components/Headings";
import HR from "../components/HR";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";

export default function Services() {
	const { services, seo } = getContent();
	return (
		<>
			<SEO
				title={seo.services.title}
				description={seo.services.description}
				keywords={seo.services.keywords}
			/>
			<PageInnerWrap className="flex flex-col py-4 pb-16">
				<H1>{services.title}</H1>
				<HR className="mb-10" />
				<div className="list flex flex-col justify-evenly gap-8 sm:flex-row">
					<div className="list__left mb-8 sm:mb-0">
						<H3 className="font-bold mb-4 text-lg text-[#1e283a]">
							{services.residential.title}
						</H3>
						<ul className="list-disc pl-[17px] leading-[28px]">
							{services.residential.items.map((item) => (
								<li key={item} className="text-[#6f6969]">
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className="list__right mb-8 sm:mb-0">
						<H3 className="font-bold mb-4 text-lg text-[#1e283a]">
							{services.commercial.title}
						</H3>
						<ul className="list-disc pl-[17px] leading-[28px]">
							{services.commercial.items.map((item) => (
								<li key={item} className="text-[#6f6969]">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</PageInnerWrap>
		</>
	);
}
