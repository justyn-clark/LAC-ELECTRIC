import { useEffect, useState } from "react";
import { getContent } from "../content";
import { useProjectImages } from "../hooks/useProjectImages";
import Lightbox from "./Lightbox";

type GalleryProps = {
	renderGroup: (
		images: string[],
		onOpen: (images: string[], index: number) => void,
	) => React.ReactNode;
};

export default function Gallery({ renderGroup }: GalleryProps) {
	const {
		projects: { galleryFilter },
	} = getContent();

	const { Buildings, Details, ElectricalRooms, Equipment, Lighting } =
		useProjectImages();

	const [activeGroup, setActiveGroup] = useState("Buildings");
	const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
	const [lightboxIndex, setLightboxIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const getGroupImages = (name: string): string[] => {
		switch (name) {
			case "Buildings":
				return Buildings;
			case "Details":
				return Details;
			case "Electrical Rooms":
				return ElectricalRooms;
			case "Equipment":
				return Equipment;
			case "Lighting":
				return Lighting;
			default:
				return Buildings;
		}
	};

	const handleOpen = (images: string[], index: number) => {
		setLightboxImages(images);
		setLightboxIndex(index);
	};

	const handleGroupChange = (name: string) => {
		if (name === activeGroup) return;

		setIsTransitioning(true);

		// Fade out
		setTimeout(() => {
			setActiveGroup(name);
			// Fade in after content change
			setTimeout(() => {
				setIsTransitioning(false);
			}, 50);
		}, 300);
	};

	// Preload images on mount to reduce flicker
	useEffect(() => {
		const allImages = [
			...Buildings,
			...Details,
			...ElectricalRooms,
			...Equipment,
			...Lighting,
		];
		allImages.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, [Buildings, Details, ElectricalRooms, Equipment, Lighting]);

	const images = getGroupImages(activeGroup);

	return (
		<section>
			<nav className="flex items-center sm:justify-center">
				<nav className="inline-flex flex-wrap gap-2 p-0 sm:flex-row sm:items-center sm:justify-evenly">
					{galleryFilter.map((item) => (
						<button
							key={item.name}
							type="button"
							onClick={() => handleGroupChange(item.name)}
							disabled={isTransitioning}
							className={`px-2 py-2 text-center transition-all duration-300 sm:px-4 sm:py-2 ${
								activeGroup === item.name
									? "bg-[#f20079] text-white opacity-100"
									: "bg-transparent opacity-50 hover:bg-[#f20079] hover:text-white hover:opacity-100"
							} ${isTransitioning ? "cursor-not-allowed" : ""}`}
						>
							{item.name}
						</button>
					))}
				</nav>
			</nav>
			<div
				className={`mt-8 min-h-[400px] transition-opacity duration-300 ${
					isTransitioning ? "opacity-0" : "opacity-100"
				}`}
			>
				{renderGroup(images, handleOpen)}
			</div>
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
		</section>
	);
}
