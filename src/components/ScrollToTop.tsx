import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top of page on route changes
 * Place this component inside your Router but outside Routes
 */
export default function ScrollToTop() {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is intentionally tracked to scroll on route changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
