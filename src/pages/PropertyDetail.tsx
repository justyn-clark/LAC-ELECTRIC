import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { H1, H2 } from "../components/Headings";
import HR from "../components/HR";
import Lightbox from "../components/Lightbox";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";
import { getContent } from "../content";
import { getAllProperties, getPropertyBySlug } from "../data/properties";
import { useProjectImages } from "../hooks/useProjectImages";
import { useProjectVideos } from "../hooks/useProjectVideos";

export default function PropertyDetail() {
	const { slug } = useParams<{ slug: string }>();
	const { projects } = getContent();
	const property = slug ? getPropertyBySlug(slug) : undefined;
	const allImages = useProjectImages();
	const allVideos = useProjectVideos();
	const navigate = useNavigate();

	const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	if (!property) {
		return (
			<PageInnerWrap className="flex min-h-[50vh] flex-col items-center justify-center py-16">
				<H1 className="mb-4 text-4xl normal-case">
					{projects.detail.notFound.title}
				</H1>
				<p className="mb-8 text-gray-600">
					{projects.detail.notFound.description}
				</p>
				<Link
					to="/projects"
					className="bg-[#f20079] px-6 py-3 text-white transition-colors hover:bg-[#d1006a]"
				>
					{projects.detail.notFound.backButton}
				</Link>
			</PageInnerWrap>
		);
	}

	const images =
		(allImages[
			property.imageFolder as keyof ReturnType<typeof useProjectImages>
		] as string[]) || [];

	const videos =
		(allVideos[
			property.imageFolder as keyof ReturnType<typeof useProjectVideos>
		] as string[]) || [];

	const mainImage =
		images.length > 0
			? images.find(
					(img) =>
						img.toLowerCase().includes("main") ||
						img.toLowerCase().includes("pic 1"),
				) || images[0]
			: null;

	const allProperties = getAllProperties();
	const currentIndex = allProperties.findIndex((p) => p.slug === slug);
	const prevProperty =
		currentIndex > 0 ? allProperties[currentIndex - 1] : null;
	const nextProperty =
		currentIndex < allProperties.length - 1
			? allProperties[currentIndex + 1]
			: null;

	const openLightbox = (images: string[], initialIndex: number = 0) => {
		if (images && images.length > 0) {
			setLightboxImages(images);
			setLightboxIndex(initialIndex);
		}
	};

	return (
		<>
			<SEO
				title={`${property.title} - Projects`}
				description={property.fullDescription}
				keywords={`${property.title}, ${property.type}, ${property.location}, electrical project, LAC Electric`}
			/>

			<div className="bg-gray-50 py-4">
				<PageInnerWrap>
					<nav className="flex items-center gap-2 text-sm text-gray-600">
						<Link to="/" className="transition-colors hover:text-[#f20079]">
							{projects.detail.breadcrumb.home}
						</Link>
						<span>/</span>
						<Link
							to="/projects"
							className="transition-colors hover:text-[#f20079]"
						>
							{projects.detail.breadcrumb.projects}
						</Link>
						<span>/</span>
						<span className="font-semibold text-gray-900">
							{property.title}
						</span>
					</nav>
				</PageInnerWrap>
			</div>

			<PageInnerWrap className="py-8 pb-16">
				<div className="mb-12">
					<div className="mb-6">
						<div className="mb-3 flex flex-wrap items-center gap-3">
							<span className="bg-[#f20079] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
								{property.type}
							</span>
							{property.featured && (
								<span className="bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900">
									{projects.detail.labels.featured}
								</span>
							)}
						</div>
						<H1>{property.title}</H1>
						<HR />
						<div className="flex flex-wrap items-center gap-4 text-gray-600">
							<span className="flex items-center gap-2">
								<svg
									className="h-5 w-5"
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
							<span className="flex items-center gap-2">
								<svg
									className="h-5 w-5"
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
					</div>

					{mainImage ? (
						<button
							type="button"
							className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-lg border-0 p-0 w-full"
							onClick={() => openLightbox(images, images.indexOf(mainImage))}
						>
							<img
								src={mainImage}
								alt={property.title}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
								<div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
									<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-label={projects.detail.labels.viewGallery}
										>
											<title>{projects.detail.labels.viewGallery}</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										{projects.detail.labels.viewGallery}
									</div>
								</div>
							</div>
						</button>
					) : (
						<div className="aspect-video flex items-center justify-center rounded-lg bg-linear-to-br from-gray-100 to-gray-200 shadow-lg">
							<div className="text-center">
								<svg
									className="mx-auto mb-4 h-16 w-16 text-gray-400"
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
								<p className="text-lg font-semibold text-gray-600">
									{projects.detail.labels.imagesComingSoon}
								</p>
							</div>
						</div>
					)}
				</div>

				<div className="grid gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<section className="mb-12">
							<H2 className="mb-4 text-gray-900 normal-case text-3xl">
								{projects.detail.labels.projectOverview}
							</H2>
							<p className="leading-relaxed text-gray-700">
								{property.fullDescription}
							</p>
						</section>

						<section className="mb-12">
							<H2 className="mb-4 text-gray-900 normal-case text-3xl">
								{projects.detail.labels.scopeOfWork}
							</H2>
							<ul className="grid gap-3 sm:grid-cols-2">
								{property.scope.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<svg
											className="mt-1 h-5 w-5 shrink-0 text-[#f20079]"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-label="Checkmark"
										>
											<title>Checkmark</title>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-gray-700">{item}</span>
									</li>
								))}
							</ul>
						</section>

						<section>
							<H2 className="mb-6 text-gray-900 normal-case text-3xl">
								{projects.detail.labels.projectGallery}
							</H2>
							{images.length > 0 ? (
								<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
									{images.map((image, index) => (
										<button
											key={image}
											type="button"
											className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl border-0 p-0 w-full"
											onClick={() => openLightbox(images, index)}
										>
											<img
												src={image}
												alt={`${property.title} - ${index + 1}`}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
												loading="lazy"
											/>
											<div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100" />
										</button>
									))}
								</div>
							) : (
								<div className="rounded-lg bg-gray-50 p-8 text-center">
									<p className="text-gray-600">
										{projects.detail.labels.galleryComingSoon}
									</p>
								</div>
							)}
						</section>

						{videos.length > 0 && (
							<section className="mt-12">
								<H2 className="mb-6 text-gray-900 normal-case text-3xl">
									Project Videos
								</H2>
								<div className="grid gap-6 md:grid-cols-2">
									{videos.map((video) => (
										<div
											key={video}
											className="relative aspect-video overflow-hidden rounded-lg bg-gray-900 shadow-lg"
										>
											<video
												src={video}
												controls
												className="h-full w-full"
												preload="metadata"
											>
												<track kind="captions" src="" label="English" default />
												Your browser does not support the video tag.
											</video>
										</div>
									))}
								</div>
							</section>
						)}
					</div>

					<div className="lg:col-span-1">
						<div className="sticky top-8 rounded-lg bg-gray-50 p-6 shadow-md">
							<h3 className="mb-6 text-xl font-bold text-gray-900">
								{projects.detail.labels.projectDetails}
							</h3>
							<div className="space-y-6">
								<div>
									<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.location}
									</div>
									<div className="text-gray-900">{property.location}</div>
								</div>
								<div>
									<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.yearCompleted}
									</div>
									<div className="text-gray-900">{property.year}</div>
								</div>
								<div>
									<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.projectType}
									</div>
									<div className="text-gray-900">{property.type}</div>
								</div>
								<div>
									<div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.keyFeatures}
									</div>
									<ul className="space-y-2">
										{property.features.map((feature) => (
											<li
												key={feature}
												className="flex items-start gap-2 text-sm text-gray-700"
											>
												<svg
													className="mt-0.5 h-4 w-4 shrink-0 text-[#f20079]"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-label="Checkmark"
												>
													<title>Checkmark</title>
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="mt-8 border-t border-gray-200 pt-6">
								<Link
									to="/contact"
									className="block w-full bg-[#f20079] py-3 text-center font-semibold text-white transition-colors hover:bg-[#d1006a]"
								>
									{projects.detail.labels.startProject}
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-gray-200 pt-12">
					<div className="grid gap-6 md:grid-cols-2">
						{prevProperty && (
							<button
								type="button"
								onClick={() => navigate(`/projects/${prevProperty.slug}`)}
								className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:border-[#f20079] hover:shadow-md"
							>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-[#f20079]">
									<svg
										className="h-6 w-6 text-gray-600 transition-colors group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Previous"
									>
										<title>Previous</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</div>
								<div>
									<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.previousProject}
									</div>
									<div className="font-semibold text-gray-900 transition-colors group-hover:text-[#f20079]">
										{prevProperty.title}
									</div>
								</div>
							</button>
						)}

						{nextProperty && (
							<button
								type="button"
								onClick={() => navigate(`/projects/${nextProperty.slug}`)}
								className="group flex items-center justify-end gap-4 rounded-lg border border-gray-200 bg-white p-6 text-right shadow-sm transition-all hover:border-[#f20079] hover:shadow-md md:col-start-2"
							>
								<div>
									<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
										{projects.detail.labels.nextProject}
									</div>
									<div className="font-semibold text-gray-900 transition-colors group-hover:text-[#f20079]">
										{nextProperty.title}
									</div>
								</div>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-[#f20079]">
									<svg
										className="h-6 w-6 text-gray-600 transition-colors group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Next"
									>
										<title>Next</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</button>
						)}
					</div>

					<div className="mt-8 text-center">
						<Link
							to="/projects"
							className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#f20079]"
						>
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label={projects.detail.labels.viewAllProjects}
							>
								<title>{projects.detail.labels.viewAllProjects}</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
							{projects.detail.labels.viewAllProjects}
						</Link>
					</div>
				</div>
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
