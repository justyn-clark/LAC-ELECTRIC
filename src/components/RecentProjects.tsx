import { Link } from "react-router-dom";
import { getContent } from "../content";
import nve6 from "../images/NveApartments/nve-6.jpg";
import nve10 from "../images/NveApartments/nve-10.jpg";
import nve27 from "../images/NveApartments/nve-27.jpg";
import nve40 from "../images/NveApartments/nve-40.jpg";
import { H2 } from "./Headings";
import HR from "./HR";
import InnerWrap from "./InnerWrap";

const recentImages = [nve6, nve10, nve27, nve40];

export default function RecentProjects() {
	const { projects } = getContent();
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
