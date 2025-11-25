import { getContent } from "../content";
import { H2 } from "./Headings";
import HR from "./HR";
import Icon from "./Icon";
import InnerWrap from "./InnerWrap";

export default function Reviews() {
	const { reviews } = getContent();
	return (
		<section className="relative w-full bg-white py-12">
			<InnerWrap>
				<H2>REVIEWS</H2>
				<HR className="mb-12" />
				<div className="mx-auto w-[80vw] text-left">
					{reviews.map((item) => (
						<div
							key={item.id}
							className="item2 mb-12 flex flex-row items-center"
						>
							<Icon size="34px" color="#0000000f" icon="yelp" />
							<div className="revWrap ml-3 border-l border-[#0000000f] pl-3">
								<p className="userName mb-1.5 font-bold">{item.user.name}</p>
								<p className="text italic text-[#6f6969]">
									&quot;{item.text}&quot;
								</p>
							</div>
						</div>
					))}
				</div>
			</InnerWrap>
		</section>
	);
}
