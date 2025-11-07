import { getContent } from "../../content";
import img6 from "../../images/Buildings/ProjectPictures-66.jpg";
import img90 from "../../images/Details/ProjectPictures-90.jpg";
import img308 from "../../images/Details/ProjectPictures-308.jpg";
import InnerWrap from "../InnerWrap";
import Box, { BoxBottom, BoxTop } from "./Box";

// Import service images - map content.json references to actual files
const serviceImages: Record<string, string> = {
	"ProjectPictures-6.jpg": img6,
	"ProjectPictures-308.jpg": img308,
	"ProjectPictures-90.jpg": img90,
};

export default function ServiceTypes() {
	const { serviceTypes } = getContent();
	return (
		<section className="bg-[#e1e2e4] py-12">
			<InnerWrap>
				<div className="flex flex-col items-center sm:flex-row sm:justify-between">
					{serviceTypes.map((item) => {
						const imagePath = serviceImages[item.image] || "";
						return (
							<Box key={item.title}>
								<BoxTop title={item.title} info={item.info} />
								<BoxBottom
									image={imagePath}
									alt={item.image.replace(/-/g, " ")}
								/>
							</Box>
						);
					})}
				</div>
			</InnerWrap>
		</section>
	);
}
