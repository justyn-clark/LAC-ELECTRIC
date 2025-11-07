export type Property = {
	id: string;
	slug: string;
	title: string;
	location: string;
	type: "Residential" | "Commercial" | "Industrial" | "Mixed-Use";
	year: string;
	shortDescription: string;
	fullDescription: string;
	scope: string[];
	features: string[];
	imageFolder: string;
	featured: boolean;
	order: number;
};

export const properties: Property[] = [
	{
		id: "1",
		slug: "kensington-campus",
		title: "Kensington Campus",
		location: "Los Angeles, CA",
		type: "Commercial",
		year: "2023",
		shortDescription:
			"Complete electrical infrastructure for modern campus facility with advanced lighting control systems.",
		fullDescription:
			"A comprehensive electrical installation for the Kensington Campus project, featuring state-of-the-art power distribution, intelligent lighting control systems, and emergency backup power. This multi-building campus required meticulous planning and execution to ensure seamless integration with the architectural design while meeting stringent safety and efficiency standards.",
		scope: [
			"Complete electrical installation",
			"Intelligent lighting control systems",
			"Emergency power systems",
			"Data and communications infrastructure",
			"Fire alarm and life safety systems",
		],
		features: [
			"Multi-building campus",
			"Energy-efficient LED lighting",
			"Automated lighting controls",
			"Backup generator systems",
			"Smart building integration",
		],
		imageFolder: "KensingtonCampus",
		featured: true,
		order: 1,
	},
	{
		id: "2",
		slug: "balboa-condos",
		title: "Balboa Condos",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2023",
		shortDescription:
			"Luxury condominium electrical systems with smart home integration and energy-efficient solutions.",
		fullDescription:
			"The Balboa Condos project showcases our expertise in high-end residential electrical installations. Each unit features smart home technology integration, premium lighting fixtures, and energy-efficient electrical systems. The project included complete panel upgrades, EV charging infrastructure, and sophisticated common area lighting design.",
		scope: [
			"Complete unit electrical systems",
			"Smart home pre-wiring",
			"EV charging stations",
			"Common area lighting",
			"Pool and spa electrical",
			"Emergency lighting systems",
		],
		features: [
			"Smart home ready",
			"Energy Star certified",
			"EV charging ready",
			"Designer lighting packages",
			"Whole-home surge protection",
		],
		imageFolder: "BalboaApartments",
		featured: true,
		order: 2,
	},
	{
		id: "3",
		slug: "the-otsego",
		title: "The Otsego",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2022",
		shortDescription:
			"Modern apartment complex with sustainable electrical solutions and contemporary amenities.",
		fullDescription:
			"The Otsego represents a modern approach to multi-family residential electrical design. This project emphasized sustainability and resident comfort with energy-efficient systems throughout. Our team delivered a complete electrical solution that supports the building's modern lifestyle amenities while maintaining operational efficiency.",
		scope: [
			"Multi-unit electrical distribution",
			"Common area power and lighting",
			"Security system infrastructure",
			"Structured wiring systems",
			"Outdoor lighting design",
		],
		features: [
			"Multi-family residential",
			"Energy-efficient systems",
			"Modern amenity spaces",
			"Secure access control",
			"LED lighting throughout",
		],
		imageFolder: "TheOtsego",
		featured: false,
		order: 3,
	},
	{
		id: "4",
		slug: "vaughn",
		title: "Vaughn",
		location: "Los Angeles, CA",
		type: "Commercial",
		year: "2022",
		shortDescription:
			"Commercial building electrical upgrade with enhanced power distribution and modern lighting.",
		fullDescription:
			"The Vaughn project involved a comprehensive electrical upgrade for an existing commercial building. Our team modernized the entire electrical infrastructure, including power distribution, lighting systems, and emergency backup capabilities. The project was completed with minimal disruption to ongoing business operations.",
		scope: [
			"Electrical system upgrade",
			"Power distribution modernization",
			"Lighting retrofit",
			"Emergency power systems",
			"Code compliance upgrades",
		],
		features: [
			"Phased construction",
			"Minimal business disruption",
			"Energy cost reduction",
			"Enhanced safety systems",
			"Modern lighting controls",
		],
		imageFolder: "Vaughn",
		featured: false,
		order: 4,
	},
	{
		id: "5",
		slug: "nve-apartments",
		title: "Nve Apartments",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2022",
		shortDescription:
			"Contemporary apartment community with complete electrical infrastructure and modern amenities.",
		fullDescription:
			"Nve Apartments showcases our ability to deliver comprehensive electrical solutions for large-scale residential developments. This project included complete electrical systems for over 100 units, sophisticated common area lighting, and infrastructure to support modern residential amenities including fitness centers, co-working spaces, and entertainment areas.",
		scope: [
			"Complete new construction electrical",
			"Multi-unit power distribution",
			"Amenity space electrical",
			"Parking structure lighting",
			"Emergency and exit lighting",
			"Fire alarm systems",
		],
		features: [
			"100+ residential units",
			"Modern amenity spaces",
			"Parking structure lighting",
			"Energy-efficient design",
			"Code-compliant installations",
		],
		imageFolder: "NveApartments",
		featured: true,
		order: 5,
	},
	{
		id: "6",
		slug: "urbanpolitian",
		title: "Urbanpolitian",
		location: "Los Angeles, CA",
		type: "Mixed-Use",
		year: "2021",
		shortDescription:
			"Mixed-use development with residential and commercial electrical systems integrated seamlessly.",
		fullDescription:
			"Urbanpolitian required careful coordination of both residential and commercial electrical systems within a single development. Our team designed and installed separate yet integrated systems to serve retail spaces, office areas, and residential units, ensuring optimal performance for each use while maintaining efficiency and code compliance.",
		scope: [
			"Mixed-use electrical design",
			"Residential unit systems",
			"Retail space power",
			"Common area lighting",
			"Building management systems",
		],
		features: [
			"Residential and commercial",
			"Integrated building systems",
			"Retail-ready spaces",
			"Modern infrastructure",
			"Sustainable design",
		],
		imageFolder: "Urbanpolitian",
		featured: false,
		order: 6,
	},
	{
		id: "7",
		slug: "newhall-crossing",
		title: "Newhall Crossing",
		location: "Valencia, CA",
		type: "Commercial",
		year: "2021",
		shortDescription:
			"Retail and commercial complex with comprehensive electrical systems and exterior lighting design.",
		fullDescription:
			"Newhall Crossing is a vibrant commercial development requiring robust electrical infrastructure to support diverse retail and office tenants. Our scope included flexible power distribution systems, dramatic exterior lighting, and infrastructure to support future tenant improvements. The project demonstrates our expertise in commercial electrical work.",
		scope: [
			"Commercial electrical installation",
			"Tenant improvement infrastructure",
			"Exterior and security lighting",
			"Signage electrical",
			"Parking lot lighting",
			"Utility coordination",
		],
		features: [
			"Multi-tenant ready",
			"Flexible power distribution",
			"Architectural lighting",
			"High-efficiency systems",
			"Future-proof infrastructure",
		],
		imageFolder: "NewhallCrossing",
		featured: false,
		order: 7,
	},
	{
		id: "8",
		slug: "1180-s-la-brea",
		title: "1180 S. La Brea",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Modern residential development with state-of-the-art electrical systems and smart building features.",
		fullDescription:
			"Located in the heart of Los Angeles, 1180 S. La Brea represents the latest in residential electrical design. This project features complete electrical systems designed for modern living, including smart home integration, energy management systems, and comprehensive amenity space electrical. Our team delivered a sophisticated electrical solution that supports the building's contemporary lifestyle offerings.",
		scope: [
			"Complete electrical installation",
			"Smart building infrastructure",
			"Unit electrical systems",
			"Amenity space power and lighting",
			"EV charging infrastructure",
			"Emergency systems",
		],
		features: [
			"Smart building technology",
			"Energy management systems",
			"EV charging ready",
			"Modern amenity spaces",
			"High-efficiency LED lighting",
		],
		imageFolder: "1180_S_Labrea",
		featured: true,
		order: 8,
	},
	{
		id: "9",
		slug: "1450-washington",
		title: "1450 Washington",
		location: "Los Angeles, CA",
		type: "Mixed-Use",
		year: "2024",
		shortDescription:
			"Urban mixed-use development with integrated residential and commercial electrical systems.",
		fullDescription:
			"1450 Washington combines residential living with ground-floor commercial spaces in a modern urban setting. This project required sophisticated electrical planning to serve diverse needs while maintaining energy efficiency and code compliance. Our installation includes separate metering for commercial tenants, residential units, and common areas, along with smart building controls.",
		scope: [
			"Mixed-use electrical systems",
			"Residential and commercial metering",
			"Common area electrical",
			"Structured cabling systems",
			"Security and access control",
			"Building automation ready",
		],
		features: [
			"Urban mixed-use",
			"Separate utility metering",
			"Retail-ready spaces",
			"Smart building controls",
			"Energy-efficient design",
		],
		imageFolder: "1450_Washington",
		featured: true,
		order: 9,
	},
	{
		id: "10",
		slug: "4000-montclair",
		title: "4000 MontClair",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Luxury residential complex with premium electrical systems and advanced home automation.",
		fullDescription:
			"4000 MontClair sets a new standard for luxury residential electrical work. Each residence features premium electrical systems with whole-home automation capabilities, designer lighting controls, and energy monitoring. The property includes resort-style amenities with sophisticated lighting and power systems to enhance the resident experience.",
		scope: [
			"Luxury residential electrical",
			"Home automation infrastructure",
			"Designer lighting systems",
			"Amenity space electrical",
			"Pool and spa systems",
			"Landscape lighting design",
		],
		features: [
			"Luxury residential",
			"Whole-home automation",
			"Premium lighting design",
			"Resort-style amenities",
			"Energy monitoring systems",
		],
		imageFolder: "4000_MontClair",
		featured: true,
		order: 10,
	},
	{
		id: "11",
		slug: "alvarado-apartments",
		title: "Alvarado Apartments",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Multi-family residential project with efficient electrical systems and modern unit amenities.",
		fullDescription:
			"Alvarado Apartments demonstrates our commitment to delivering quality electrical work for multi-family residential projects. This development features energy-efficient electrical systems throughout, modern unit electrical packages, and comprehensive common area lighting. The project was completed on schedule and within budget while exceeding quality standards.",
		scope: [
			"Multi-family electrical systems",
			"Unit electrical packages",
			"Common area power and lighting",
			"Parking garage electrical",
			"Emergency lighting systems",
			"Fire alarm integration",
		],
		features: [
			"Multi-family residential",
			"Energy-efficient systems",
			"Modern unit packages",
			"Comprehensive lighting",
			"Code-compliant installation",
		],
		imageFolder: "Alvarado",
		featured: false,
		order: 11,
	},
	{
		id: "12",
		slug: "bermuda-apartments",
		title: "Bermuda Apartments",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Large-scale apartment community with comprehensive electrical infrastructure and smart systems.",
		fullDescription:
			"Bermuda Apartments is one of our largest residential projects, featuring complete electrical systems for over 150 units. This extensive project included sophisticated power distribution, comprehensive lighting design for common areas and units, and infrastructure to support modern amenities. Our team coordinated closely with other trades to ensure seamless integration and timely project completion.",
		scope: [
			"Large-scale residential electrical",
			"Power distribution systems",
			"Unit electrical packages",
			"Common area lighting design",
			"Amenity space electrical",
			"Parking and security lighting",
			"Building management integration",
		],
		features: [
			"150+ residential units",
			"Large-scale infrastructure",
			"Modern amenity spaces",
			"Comprehensive lighting design",
			"Integrated building systems",
		],
		imageFolder: "Bermuda",
		featured: true,
		order: 12,
	},
	{
		id: "13",
		slug: "draco-apartments",
		title: "Draco Apartments",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Contemporary apartment building with modern electrical systems and energy-efficient solutions.",
		fullDescription:
			"Draco Apartments showcases contemporary residential electrical design with a focus on energy efficiency and resident comfort. The project includes complete electrical systems for all units, energy-efficient lighting throughout common areas, and infrastructure to support modern lifestyle amenities. Our work emphasizes both functionality and aesthetic appeal.",
		scope: [
			"Residential electrical systems",
			"Energy-efficient lighting",
			"Unit power distribution",
			"Common area electrical",
			"Security systems infrastructure",
			"Outdoor lighting",
		],
		features: [
			"Contemporary design",
			"Energy-efficient systems",
			"Modern unit packages",
			"Quality construction",
			"Resident-focused amenities",
		],
		imageFolder: "Draco",
		featured: false,
		order: 13,
	},
	{
		id: "14",
		slug: "fedora-tribly",
		title: "Fedora x Tribly",
		location: "Los Angeles, CA",
		type: "Mixed-Use",
		year: "2024",
		shortDescription:
			"Innovative mixed-use project combining residential living with commercial spaces and modern electrical infrastructure.",
		fullDescription:
			"Fedora x Tribly represents innovative urban development with seamlessly integrated residential and commercial electrical systems. This unique project required creative solutions to serve diverse electrical needs while maintaining architectural integrity. Our team delivered flexible, efficient electrical systems that support both residential comfort and commercial functionality.",
		scope: [
			"Mixed-use electrical design",
			"Residential unit systems",
			"Commercial tenant spaces",
			"Common area electrical",
			"Building automation systems",
			"Structured cabling",
		],
		features: [
			"Innovative mixed-use",
			"Flexible commercial spaces",
			"Residential amenities",
			"Integrated systems",
			"Urban-focused design",
		],
		imageFolder: "Fedora_x_Tribly",
		featured: false,
		order: 14,
	},
	{
		id: "15",
		slug: "ten310",
		title: "Ten(310)",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Boutique residential building with premium electrical systems and sophisticated lighting design.",
		fullDescription:
			"Ten(310) is a boutique residential building where attention to detail is paramount. Our electrical work includes premium systems throughout, with sophisticated lighting design, high-end fixtures, and comprehensive power distribution. The project demonstrates our capability to deliver exceptional quality on smaller, detail-oriented projects.",
		scope: [
			"Boutique residential electrical",
			"Premium lighting design",
			"Unit electrical systems",
			"Common area power and lighting",
			"Specialty electrical systems",
		],
		features: [
			"Boutique residential",
			"Premium finishes",
			"Sophisticated lighting",
			"High-end systems",
			"Detail-oriented execution",
		],
		imageFolder: "Ten310",
		featured: false,
		order: 15,
	},
	{
		id: "16",
		slug: "wm-apartments",
		title: "WM Apartments",
		location: "Los Angeles, CA",
		type: "Residential",
		year: "2024",
		shortDescription:
			"Modern apartment community with complete electrical systems and contemporary amenities.",
		fullDescription:
			"WM Apartments features modern electrical systems designed for contemporary urban living. This project includes comprehensive electrical infrastructure supporting residential units, common amenities, and building systems. Our work emphasizes reliability, efficiency, and code compliance while meeting the demands of modern apartment living.",
		scope: [
			"Residential electrical systems",
			"Unit power distribution",
			"Common area electrical",
			"Amenity space lighting",
			"Emergency systems",
			"Security infrastructure",
		],
		features: [
			"Modern apartment community",
			"Contemporary amenities",
			"Reliable systems",
			"Energy-efficient design",
			"Code-compliant installation",
		],
		imageFolder: "WM_apartments",
		featured: false,
		order: 16,
	},
];

export function getPropertyBySlug(slug: string): Property | undefined {
	return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
	return properties.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProperties(): Property[] {
	return properties.sort((a, b) => a.order - b.order);
}

export function getPropertyTypes(): string[] {
	return Array.from(new Set(properties.map((p) => p.type)));
}
