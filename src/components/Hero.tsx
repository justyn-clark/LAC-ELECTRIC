import { useEffect, useState } from "react";
import { getContent } from "../content";
import hero2 from "../images/Buildings/ProjectPictures-48.jpg";
import hero from "../images/Buildings/ProjectPictures-167.jpg";
import hero3 from "../images/Buildings/ProjectPictures-208.jpg";
import { H1 } from "./Headings";

const slides = [hero, hero2, hero3];

export default function Hero() {
	const { hero: heroContent } = getContent();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(
			() => setIndex((i) => (i + 1) % slides.length),
			5000,
		);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="relative flex h-[450px] w-full items-end justify-center overflow-hidden">
			{slides.map((src, i) => (
				<img
					key={src}
					src={src}
					alt={`Hero ${i + 1}`}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
				/>
			))}
			<div className="absolute inset-0 bg-black/30" />
			<div className="relative z-10 w-[90vw] pb-20">
				<div className="text-center text-white">
					<H1 className="mb-0 text-[40px] normal-case">{heroContent.title}</H1>
					<p className="mt-2 text-xl font-light normal-case text-center">
						{heroContent.subtitle}
					</p>
				</div>
			</div>
		</section>
	);
}
