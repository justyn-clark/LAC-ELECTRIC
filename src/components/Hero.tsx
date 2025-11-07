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
		<section className="relative flex h-[400px] w-full items-end justify-center overflow-hidden sm:h-[450px] md:h-[500px]">
			{slides.map((src, i) => (
				<img
					key={src}
					src={src}
					alt={`Hero ${i + 1}`}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
				/>
			))}
			<div className="absolute inset-0 bg-black/30" />
			<div className="relative z-10 w-full max-w-6xl px-4 pb-12 sm:pb-16 md:pb-20">
				<div className="text-center text-white">
					<H1 className="mb-0 text-3xl normal-case sm:text-[36px] md:text-[40px]">
						{heroContent.title}
					</H1>
					<p className="mt-2 text-base font-light normal-case text-center sm:text-lg md:text-xl">
						{heroContent.subtitle}
					</p>
				</div>
			</div>
		</section>
	);
}
