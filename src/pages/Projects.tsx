import { useState } from "react";
import Gallery from "../components/Gallery";
import { H1, H2 } from "../components/Headings";
import HR from "../components/HR";
import Lightbox from "../components/Lightbox";
import PageInnerWrap from "../components/PageInnerWrap";
import PropertyCard from "../components/PropertyCard";
import SEO from "../components/SEO";
import { getContent } from "../content";
import { getAllProperties, getPropertyTypes } from "../data/properties";

export default function Projects() {
	const { projects: projectsContent } = getContent();
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
				title={projectsContent.page.title}
				description={projectsContent.page.description}
				keywords="electrical projects, portfolio, Los Angeles electrical projects, residential projects, commercial projects, industrial projects, LAC Electric projects"
			/>
			<PageInnerWrap className="flex flex-col py-4 pb-16">
				<div className="mb-8">
					<H1>{projectsContent.page.title}</H1>
					<HR />
					<p className="text-lg text-gray-600 max-w-4xl mx-auto text-center pt-4">
						{projectsContent.page.description}
					</p>
				</div>
				<div className="my-8">
					<H2 className="text-left pb-3 text-xl">
						{projectsContent.page.filterTitle}
					</H2>
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
							{projectsContent.page.allProjects} ({properties.length})
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

				<section className="mb-16">
					<div className="mb-6 flex items-center justify-between">
						<H2 className="text-gray-900 normal-case text-xl">
							{selectedType === "All"
								? projectsContent.page.allProjects
								: `${selectedType} ${projectsContent.page.projects}`}
						</H2>
						<span className="text-sm text-gray-600">
							{projectsContent.page.showing} {filteredProperties.length}{" "}
							{filteredProperties.length === 1
								? projectsContent.page.project
								: projectsContent.page.projects}
						</span>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{filteredProperties.map((property) => (
							<PropertyCard key={property.id} property={property} />
						))}
					</div>
				</section>

				<section className="mt-20 rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 p-8 shadow-inner md:p-12">
					<div className="mb-8 text-center">
						<H2 className="mb-4 text-3xl text-gray-900 md:text-4xl normal-case">
							{projectsContent.page.gallery.title}
						</H2>
						<p className="mx-auto max-w-2xl text-lg text-gray-600">
							{projectsContent.page.gallery.description}
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
