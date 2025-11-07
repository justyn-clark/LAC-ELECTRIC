import { useCallback, useEffect, useState } from "react";

type LightboxProps = {
	images: string[];
	startIndex: number;
	alt?: string;
	onClose: () => void;
};

export default function Lightbox({
	images,
	startIndex,
	alt,
	onClose,
}: LightboxProps) {
	const [currentIndex, setCurrentIndex] = useState(startIndex);

	useEffect(() => {
		setCurrentIndex(startIndex);
	}, [startIndex]);

	const goNext = useCallback(() => {
		setCurrentIndex((i) => (i + 1) % images.length);
	}, [images.length]);

	const goPrev = useCallback(() => {
		setCurrentIndex((i) => (i - 1 + images.length) % images.length);
	}, [images.length]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") goNext();
			if (e.key === "ArrowLeft") goPrev();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [goNext, goPrev, onClose]);

	const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (images.length <= 1) return;

		const rect = e.currentTarget.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const width = rect.width;
		const centerX = width / 2;

		// Click on left half = previous, right half = next
		if (clickX < centerX) {
			goPrev();
		} else {
			goNext();
		}
	};

	const handleBackdropKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Escape" || e.key === "Enter") {
			onClose();
		}
	};

	return (
		// biome-ignore lint/a11y/useSemanticElements: Backdrop overlay needs to be a div for full-screen coverage
		<div
			role="button"
			tabIndex={0}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
			onClick={onClose}
			onKeyDown={handleBackdropKeyDown}
		>
			<div className="relative max-w-6xl max-h-[90vh] p-2">
				{/* Image container with left/right click zones */}
				{/* biome-ignore lint/a11y/useSemanticElements: Image container needs div for layout with click zones */}
				<div
					role="button"
					tabIndex={0}
					className="relative cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						handleImageClick(e);
					}}
					onKeyDown={(e) => {
						if (e.key === "ArrowLeft") {
							e.stopPropagation();
							goPrev();
						} else if (e.key === "ArrowRight") {
							e.stopPropagation();
							goNext();
						}
					}}
				>
					<img
						src={images[currentIndex]}
						alt={alt ?? "Image"}
						className="max-h-[85vh] w-auto object-contain rounded shadow-2xl pointer-events-none"
						draggable={false}
					/>

					{/* Visual indicator for click zones (optional, can be hidden) */}
					{images.length > 1 && (
						<>
							{/* Left click zone indicator */}
							<div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-0 hover:opacity-10 bg-white transition-opacity pointer-events-none" />
							{/* Right click zone indicator */}
							<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-0 hover:opacity-10 bg-white transition-opacity pointer-events-none" />
						</>
					)}
				</div>

				{/* Navigation buttons (still available for accessibility) */}
				{images.length > 1 && (
					<>
						<button
							type="button"
							aria-label="Previous"
							onClick={(e) => {
								e.stopPropagation();
								goPrev();
							}}
							className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white text-black shadow-lg hover:shadow-xl transition-all z-10 border-2 border-white"
							style={{ aspectRatio: "1 / 1" }}
						>
							<span className="text-2xl font-bold leading-none">‹</span>
						</button>
						<button
							type="button"
							aria-label="Next"
							onClick={(e) => {
								e.stopPropagation();
								goNext();
							}}
							className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white text-black shadow-lg hover:shadow-xl transition-all z-10 border-2 border-white"
							style={{ aspectRatio: "1 / 1" }}
						>
							<span className="text-2xl font-bold leading-none">›</span>
						</button>
					</>
				)}

				{/* Close button */}
				<button
					type="button"
					aria-label="Close"
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
					className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black shadow-lg hover:shadow-xl transition-all z-10 border-2 border-white"
					style={{ aspectRatio: "1 / 1" }}
				>
					<span className="text-xl font-bold leading-none">✕</span>
				</button>

				{/* Image counter */}
				{images.length > 1 && (
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white text-sm backdrop-blur z-10">
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>
		</div>
	);
}
