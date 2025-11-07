import Hero from "../components/Hero";
import ServiceTypes from "../components/home/ServiceTypes";
import RecentProjects from "../components/RecentProjects";
import Reviews from "../components/Reviews";
import SEO from "../components/SEO";
import ServicesGrid from "../components/ServicesGrid";

export default function Home() {
	return (
		<>
			<SEO
				title="Home"
				description="LAC Electric Inc. - Independent electrical contracting firm serving Los Angeles County and neighboring cities for over 18 years. Residential, commercial, and industrial electrical services."
				keywords="electrical contractor, Los Angeles, Van Nuys, residential electrician, commercial electrician, industrial electrician, electrical services, LAC Electric"
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
