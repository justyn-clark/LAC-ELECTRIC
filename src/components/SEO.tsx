import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SEOProps = {
	title: string;
	description?: string;
	keywords?: string;
	image?: string;
};

const siteMetadata = {
	title: "LAC Electric",
	description:
		"Independent electrical contracting firm located in the heart of San Fernando Valley, California, serving the greatest Los Angeles County and neighboring cities for over 18 years and counting.",
	siteUrl: "https://www.lacelectric.com",
};

export default function SEO({ title, description, keywords, image }: SEOProps) {
	const location = useLocation();
	const metaDescription = description || siteMetadata.description;
	const metaTitle = `${title} | ${siteMetadata.title}`;
	const metaUrl = `${siteMetadata.siteUrl}${location.pathname === "/" ? "" : location.pathname}`;
	const metaImage = image || `${siteMetadata.siteUrl}/logo.png`;

	useEffect(() => {
		document.title = metaTitle;

		const updateMetaTag = (
			name: string,
			content: string,
			attribute: string = "name",
		) => {
			let element = document.querySelector(`meta[${attribute}="${name}"]`);
			if (!element) {
				element = document.createElement("meta");
				element.setAttribute(attribute, name);
				document.head.appendChild(element);
			}
			element.setAttribute("content", content);
		};

		updateMetaTag("title", metaTitle);
		updateMetaTag("description", metaDescription);

		if (keywords) {
			updateMetaTag("keywords", keywords);
		}

		updateMetaTag("og:type", "website", "property");
		updateMetaTag("og:url", metaUrl, "property");
		updateMetaTag("og:title", metaTitle, "property");
		updateMetaTag("og:description", metaDescription, "property");
		updateMetaTag("og:image", metaImage, "property");

		updateMetaTag("twitter:card", "summary_large_image");
		updateMetaTag("twitter:url", metaUrl);
		updateMetaTag("twitter:title", metaTitle);
		updateMetaTag("twitter:description", metaDescription);
		updateMetaTag("twitter:image", metaImage);

		let canonical = document.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", metaUrl);
	}, [metaTitle, metaDescription, keywords, metaUrl, metaImage]);

	return null;
}
