import { Link } from "react-router-dom";
import { getContent } from "../content";
import type { Property } from "../data/properties";
import { useProjectImages } from "../hooks/useProjectImages";

type PropertyCardProps = {
	property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
	const { projects } = getContent();
	const allImages = useProjectImages();
	const images =
		(allImages[
			property.imageFolder as keyof ReturnType<typeof useProjectImages>
		] as string[]) || [];

	const findMainImage = (images: string[]) => {
		if (!images || images.length === 0) return null;
		return (
			images.find(
				(img) =>
					img.toLowerCase().includes("main") ||
					img.toLowerCase().includes("pic 1"),
			) || images[0]
		);
	};

	const mainImage = images.length > 0 ? findMainImage(images) : null;

	return (
		<Link to={`/projects/${property.slug}`} className="group block">
			<article className="h-full overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl">
				<div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
					{mainImage ? (
						<img
							src={mainImage}
							alt={property.title}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center">
							<svg
								className="h-16 w-16 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="No image available"
							>
								<title>No image available</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>
					)}

					<div className="absolute right-4 top-4 bg-[#f20079] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
						{property.type}
					</div>

					{property.featured && (
						<div className="absolute left-4 top-4 bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-lg">
							{projects.detail.labels.featured}
						</div>
					)}
				</div>

				<div className="p-6">
					<h2 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#f20079]">
						{property.title}
					</h2>

					<div className="mb-3 flex items-center gap-3 text-sm text-gray-600">
						<span className="flex items-center gap-1">
							<svg
								className="h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Location"
							>
								<title>Location</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{property.location}
						</span>
						<span className="flex items-center gap-1">
							<svg
								className="h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Year"
							>
								<title>Year</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							{property.year}
						</span>
					</div>

					<p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-700">
						{property.shortDescription}
					</p>

					<div className="flex items-center gap-2 text-sm font-semibold text-[#f20079] transition-all group-hover:gap-3">
						{projects.detail.cta.viewProject}
						<svg
							className="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Arrow right"
						>
							<title>Arrow right</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</article>
		</Link>
	);
}
