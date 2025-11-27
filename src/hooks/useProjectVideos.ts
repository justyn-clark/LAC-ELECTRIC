const AspireVideos = Object.values(
	import.meta.glob("../images/Aspire/*.{mp4,MP4,mov,MOV,webm,WEBM}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

export function useProjectVideos() {
	return {
		Aspire: AspireVideos,
	};
}
