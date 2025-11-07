import { getContent } from "../content";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import service4 from "../images/service4.jpg";
import { H2, H4 } from "./Headings";
import HR from "./HR";
import InnerWrap from "./InnerWrap";

const serviceImages: Record<string, string> = {
	"service1.jpg": service1,
	"service2.jpg": service2,
	"service3.jpg": service3,
	"service4.jpg": service4,
};

export default function ServicesGrid() {
	const { services } = getContent();
	return (
		<section className="relative w-full bg-white py-12">
			<InnerWrap>
				<H2>{services.title.toUpperCase()}</H2>
				<HR />
				<div className="flex flex-col justify-between sm:flex-row">
					{services.items.map((item) => {
						const imagePath = serviceImages[item.image] || "";
						return (
							<div
								key={item.title}
								className="item mb-16 flex flex-col items-center text-center sm:mx-4 sm:mb-8 sm:flex-1"
							>
								<img
									src={imagePath}
									alt={item.title}
									className="img mb-8 w-[35%]"
								/>
								<H4 className="text-lg font-bold">
									{item.title.toUpperCase()}
								</H4>
								<p className="text-sm text-[#6f6969]">{item.info}</p>
							</div>
						);
					})}
				</div>
			</InnerWrap>
		</section>
	);
}
