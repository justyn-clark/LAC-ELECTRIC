// Import all project images using glob
const Buildings = Object.values(
	import.meta.glob("../images/Buildings/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Details = Object.values(
	import.meta.glob("../images/Details/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const ElectricalRooms = Object.values(
	import.meta.glob("../images/ElectricalRooms/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Equipment = Object.values(
	import.meta.glob("../images/Equipment/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Lighting = Object.values(
	import.meta.glob("../images/Lighting/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

// Import project-specific folders
const KensingtonCampus = Object.values(
	import.meta.glob("../images/KensingtonCampus/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const BalboaApartments = Object.values(
	import.meta.glob("../images/BalboaApartments/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const TheOtsego = Object.values(
	import.meta.glob("../images/TheOtsego/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Vaughn = Object.values(
	import.meta.glob("../images/Vaughn/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const NveApartments = Object.values(
	import.meta.glob("../images/NveApartments/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Urbanpolitian = Object.values(
	import.meta.glob("../images/Urbanpolitian/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const NewhallCrossing = Object.values(
	import.meta.glob("../images/NewhallCrossing/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

// NEW folders pulled from src/images/NEW and optimized to src/images
const Labrea1180 = Object.values(
	import.meta.glob("../images/1180_S_Labrea/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Washington1450 = Object.values(
	import.meta.glob("../images/1450_Washington/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const MontClair4000 = Object.values(
	import.meta.glob("../images/4000_MontClair/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Alvarado = Object.values(
	import.meta.glob("../images/Alvarado/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Bermuda = Object.values(
	import.meta.glob("../images/Bermuda/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Draco = Object.values(
	import.meta.glob("../images/Draco/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Fedora_x_Tribly = Object.values(
	import.meta.glob("../images/Fedora_x_Tribly/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Ten310 = Object.values(
	import.meta.glob("../images/Ten310/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const WM_apartments = Object.values(
	import.meta.glob("../images/WM_apartments/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

const Aspire = Object.values(
	import.meta.glob("../images/Aspire/*.{jpg,jpeg,JPG,JPEG}", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>,
);

export function useProjectImages() {
	return {
		Buildings,
		Details,
		ElectricalRooms,
		Equipment,
		Lighting,
		KensingtonCampus,
		BalboaApartments,
		TheOtsego,
		Vaughn,
		NveApartments,
		Urbanpolitian,
		NewhallCrossing,
		// new galleries
		"1180_S_Labrea": Labrea1180,
		"1450_Washington": Washington1450,
		"4000_MontClair": MontClair4000,
		Alvarado,
		Bermuda,
		Draco,
		Fedora_x_Tribly,
		Ten310,
		WM_apartments,
		Aspire,
	};
}
