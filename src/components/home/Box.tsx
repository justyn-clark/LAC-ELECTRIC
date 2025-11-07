import { Link } from "react-router-dom";
import Icon from "../Icon";

type BoxProps = {
	children: React.ReactNode;
};

export default function Box({ children }: BoxProps) {
	return (
		<div className="relative mx-0 mb-8 flex-1 overflow-hidden text-white sm:mx-0 sm:mb-0 [&:nth-child(2)]:sm:mx-3">
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
		<div className="top flex h-[260px] flex-1 flex-col items-center justify-center bg-[#1e283a] p-8 text-center transition-colors hover:bg-[#e4012e]">
			<p className="title mb-2.5 text-xl font-bold uppercase">{title}</p>
			<p className="text-sm font-light leading-[22px]">{info}</p>
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
		<div className="bottom relative max-h-[225px] overflow-hidden">
			<Link to="/services">
				<img
					src={image}
					alt={alt}
					className="img h-auto transition-transform duration-500 hover:scale-125"
				/>
				<div className="overlay absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 hover:opacity-100">
					<Icon icon="expand" size="30px" />
				</div>
			</Link>
		</div>
	);
}
