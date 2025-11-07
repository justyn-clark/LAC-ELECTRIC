import data from "../content/copy.json";

export type NavItem = { path: string; label: string };
export type ServiceItem = { title: string; info: string; image: string };
export type Services = {
	title: string;
	items: ServiceItem[];
	residential: { title: string; items: string[] };
	commercial: { title: string; items: string[] };
};
export type Projects = {
	title: string;
	info: string;
	cta: string;
	page: {
		title: string;
		description: string;
		filterTitle: string;
		allProjects: string;
		showing: string;
		project: string;
		projects: string;
		gallery: {
			title: string;
			description: string;
		};
	};
	galleryFilter: { name: string }[];
	nveApartments: { src: string }[];
	imagesRecent: { src: string }[];
	imagesAll: { src: string }[];
	detail: {
		notFound: {
			title: string;
			description: string;
			backButton: string;
		};
		breadcrumb: {
			home: string;
			projects: string;
		};
		labels: {
			featured: string;
			location: string;
			year: string;
			viewGallery: string;
			noImage: string;
			imagesComingSoon: string;
			projectOverview: string;
			scopeOfWork: string;
			projectGallery: string;
			galleryComingSoon: string;
			projectDetails: string;
			yearCompleted: string;
			projectType: string;
			keyFeatures: string;
			startProject: string;
			previousProject: string;
			nextProject: string;
			viewAllProjects: string;
		};
		cta: {
			viewProject: string;
		};
	};
};
export type About = {
	pageTitle: string;
	info: { title: string; desc: string };
	objectives: { title: string; desc: string };
	president: {
		name: string;
		title: string;
		company: string;
	};
};
export type Contact = {
	pageTitle: string;
	address: string;
	email: string;
	phone: string;
	careerText: string;
	careerLink: string;
	careerTextEnd: string;
};
export type Hero = {
	title: string;
	subtitle: string;
};
export type SEO = {
	home: {
		title: string;
		description: string;
		keywords: string;
	};
	projects: {
		title: string;
		description: string;
		keywords: string;
	};
	services: {
		title: string;
		description: string;
		keywords: string;
	};
	about: {
		title: string;
		description: string;
		keywords: string;
	};
	contact: {
		title: string;
		description: string;
		keywords: string;
	};
};

export type SiteContent = {
	title: string;
	navigation: NavItem[];
	hero: Hero;
	serviceTypes: ServiceItem[];
	services: Services;
	projects: Projects;
	about: About;
	contact: Contact;
	seo: SEO;
	reviews: {
		id: string;
		text: string;
		rating: number;
		user: { id?: string; name: string };
	}[];
};

export function getContent(): SiteContent {
	return data as SiteContent;
}
