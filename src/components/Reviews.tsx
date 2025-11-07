import { getContent } from "../content";
import HR from "./HR";
import Icon from "./Icon";
import InnerWrap from "./InnerWrap";

export default function Reviews() {
	const { reviews } = getContent();
	return (
		<section className="relative w-full bg-white py-12">
			<InnerWrap>
				<h2>REVIEWS</h2>
				<HR />
				<div className="mx-auto mt-12 w-[80vw] text-left">
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
