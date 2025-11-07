import { useState } from "react";
import Gallery from "../components/Gallery";
import HR from "../components/HR";
import Lightbox from "../components/Lightbox";
import PageInnerWrap from "../components/PageInnerWrap";
import PropertyCard from "../components/PropertyCard";
import SEO from "../components/SEO";
import { getAllProperties, getPropertyTypes } from "../data/properties";

export default function Projects() {
	const properties = getAllProperties();
	const propertyTypes = getPropertyTypes();
	const [selectedType, setSelectedType] = useState<string>("All");
	const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const filteredProperties =
		selectedType === "All"
			? properties
			: properties.filter((p) => p.type === selectedType);

	const renderGroup = (
		images: string[],
		onOpen: (images: string[], index: number) => void,
	) => {
		return (
			<div className="images flex flex-col items-center justify-between gap-0 pt-8 sm:flex-row sm:flex-wrap sm:gap-4">
				{images.map((src, i) => (
					<button
						key={src}
						type="button"
						className="images__img group grow cursor-pointer overflow-hidden p-4 sm:max-w-[250px] border-0 bg-transparent"
						onClick={() => onOpen(images, i)}
					>
						<img
							src={src}
							alt={src.replace(/-/g, " ")}
							className="h-auto w-full transform transition-all duration-300 group-hover:scale-105"
							loading="eager"
						/>
					</button>
				))}
			</div>
		);
	};

	return (
		<>
			<SEO
				title="Projects"
				description="View our portfolio of electrical projects including residential, commercial, and industrial installations across Los Angeles County."
				keywords="electrical projects, portfolio, Los Angeles electrical projects, residential projects, commercial projects, industrial projects, LAC Electric projects"
			/>
			<PageInnerWrap className="flex flex-col py-4 pb-16">
				{/* Page Header */}
				<div className="mb-8">
					<h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Projects</h1>
					<p className="text-lg text-gray-600">
						Explore our diverse portfolio of electrical projects across Los
						Angeles County. From luxury residential developments to large-scale
						commercial installations, each project showcases our commitment to
						quality, safety, and innovation.
					</p>
				</div>

				<HR />

				{/* Filter Section */}
				<div className="my-8">
					<h2 className="mb-4 text-xl font-semibold text-gray-900">
						Filter by Type
					</h2>
					<div className="flex flex-wrap gap-3">
						<button
							type="button"
							onClick={() => setSelectedType("All")}
							className={`rounded-full px-6 py-2 font-semibold transition-all ${
								selectedType === "All"
									? "bg-[#f20079] text-white shadow-md"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							All Projects ({properties.length})
						</button>
						{propertyTypes.map((type) => {
							const count = properties.filter((p) => p.type === type).length;
							return (
								<button
									key={type}
									type="button"
									onClick={() => setSelectedType(type)}
									className={`rounded-full px-6 py-2 font-semibold transition-all ${
										selectedType === type
											? "bg-[#f20079] text-white shadow-md"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
								>
									{type} ({count})
								</button>
							);
						})}
					</div>
				</div>

				{/* Property Cards Grid */}
				<section className="mb-16">
					<div className="mb-6 flex items-center justify-between">
						<h2 className="text-2xl font-bold text-gray-900">
							{selectedType === "All"
								? "All Projects"
								: `${selectedType} Projects`}
						</h2>
						<span className="text-sm text-gray-600">
							Showing {filteredProperties.length}{" "}
							{filteredProperties.length === 1 ? "project" : "projects"}
						</span>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{filteredProperties.map((property) => (
							<PropertyCard key={property.id} property={property} />
						))}
					</div>
				</section>

				{/* Featured Work Gallery Section */}
				<section className="mt-20 rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 p-8 shadow-inner md:p-12">
					<div className="mb-8 text-center">
						<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
							Featured Work Gallery
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-600">
							Explore our craftsmanship across different categories. From
							intricate electrical rooms to stunning architectural lighting,
							each image represents our commitment to excellence.
						</p>
					</div>
					<div className="rounded-xl bg-white p-6 shadow-md md:p-8">
						<Gallery renderGroup={renderGroup} />
					</div>
				</section>
			</PageInnerWrap>
			{lightboxImages && (
				<Lightbox
					images={lightboxImages}
					startIndex={lightboxIndex}
					onClose={() => {
						setLightboxImages(null);
						setLightboxIndex(0);
					}}
				/>
			)}
		</>
	);
}
