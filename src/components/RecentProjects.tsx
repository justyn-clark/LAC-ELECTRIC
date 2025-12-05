import { Link } from "react-router-dom";
import { getContent } from "../content";
import { useProjectImages } from "../hooks/useProjectImages";
import { H2 } from "./Headings";
import HR from "./HR";
import InnerWrap from "./InnerWrap";

function getRecentImages() {
	const allImages = useProjectImages();
	const nveImages = (allImages.NveApartments as string[]) || [];

	if (nveImages.length === 0) return [];

	// Find the specific images we want to display by filename
	const nve6 = nveImages.find((img) => img.includes("nve-6") && !img.includes("main"));
	const nve10 = nveImages.find((img) => img.includes("nve-10"));
	const nve27 = nveImages.find((img) => img.includes("nve-27"));
	const nve40 = nveImages.find((img) => img.includes("nve-40"));

	// Return in order, filtering out undefined values
	return [nve6, nve10, nve27, nve40].filter((img): img is string => Boolean(img));
}

export default function RecentProjects() {
	const { projects } = getContent();
	const recentImages = getRecentImages();

	return (
		<section className="flex w-full flex-col bg-[#e1e2e4] py-12">
			<InnerWrap>
				<H2>{projects.title.toUpperCase()}</H2>
				<HR className="mb-12" />
				<p className="text-center">{projects.info}</p>
				<div className="images relative flex flex-col gap-4 pt-8 sm:flex-row">
					{recentImages.map((src) => (
						<div key={src} className="images_img grow p-4">
							<img
								src={src}
								alt="Recent project"
								loading="lazy"
								className="h-auto w-full"
							/>
						</div>
					))}
				</div>
				<Link
					to="/projects"
					className="block pt-[18px] pr-[38px] pb-[19px] pl-[36px] max-w-[300px] w-full my-8 mx-auto border-none text-white bg-[#f20079] hover:bg-[#1e283a] text-center text-2xl no-underline transition duration-300"
				>
					{projects.cta}
				</Link>
			</InnerWrap>
		</section>
	);
}
