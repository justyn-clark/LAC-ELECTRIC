import Hero from "../components/Hero";
import ServiceTypes from "../components/home/ServiceTypes";
import RecentProjects from "../components/RecentProjects";
import Reviews from "../components/Reviews";
import SEO from "../components/SEO";
import ServicesGrid from "../components/ServicesGrid";
import { getContent } from "../content";

export default function Home() {
	const { seo } = getContent();
	return (
		<>
			<SEO
				title={seo.home.title}
				description={seo.home.description}
				keywords={seo.home.keywords}
			/>
			<div className="flex flex-col">
				<Hero />
				<ServiceTypes />
				<ServicesGrid />
				<RecentProjects />
				<Reviews />
			</div>
		</>
	);
}
