import data from "../content/copy.json";

export type NavItem = { path: string; label: string };
export type ServiceItem = { title: string; info: string; image: string };
export type Services = { title: string; items: ServiceItem[] };
export type Projects = {
	title: string;
	info: string;
	cta: string;
	galleryFilter: { name: string }[];
	nveApartments: { src: string }[];
	imagesRecent: { src: string }[];
	imagesAll: { src: string }[];
};
export type About = {
	info: { title: string; desc: string };
	objectives: { title: string; desc: string };
};
export type Contact = { address: string; email: string; phone: string };

export type SiteContent = {
	title: string;
	navigation: NavItem[];
	serviceTypes: ServiceItem[];
	services: Services;
	projects: Projects;
	about: About;
	contact: Contact;
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
