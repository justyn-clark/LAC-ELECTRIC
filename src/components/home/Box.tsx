import { Link } from "react-router-dom";
import Icon from "../Icon";

type BoxProps = {
	children: React.ReactNode;
};

export default function Box({ children }: BoxProps) {
	return (
		<div className="relative mb-8 flex-1 overflow-hidden text-white sm:mb-0 sm:mx-2 md:mx-3">
			{children}
		</div>
	);
}

type BoxTopProps = {
	title: string;
	info: string;
};

export function BoxTop({ title, info }: BoxTopProps) {
	return (
		<div className="top flex min-h-[240px] flex-1 flex-col items-center justify-center bg-[#1e283a] p-6 text-center transition-colors hover:bg-[#e4012e] sm:min-h-[260px] sm:p-8">
			<p className="title mb-2.5 text-lg font-bold uppercase sm:text-xl">{title}</p>
			<p className="text-xs font-light leading-relaxed sm:text-sm sm:leading-[22px]">
				{info}
			</p>
			<Link aria-label="link to services" to="/services" className="mt-4">
				<Icon
					icon="arrow-circle-o-right"
					size="24px"
					padding="1rem 0 0"
					className="icon transition-colors hover:text-[#1e283a]"
				/>
			</Link>
		</div>
	);
}

type BoxBottomProps = {
	image: string;
	alt: string;
};

export function BoxBottom({ image, alt }: BoxBottomProps) {
	return (
		<div className="bottom relative max-h-[200px] overflow-hidden sm:max-h-[225px]">
			<Link to="/services">
				<img
					src={image}
					alt={alt}
					className="img h-auto w-full object-cover transition-transform duration-500 hover:scale-125"
				/>
				<div className="overlay absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 hover:opacity-100">
					<Icon icon="expand" size="30px" />
				</div>
			</Link>
		</div>
	);
}
