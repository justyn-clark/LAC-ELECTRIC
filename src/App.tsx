import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PropertyDetail from "./pages/PropertyDetail";
import Services from "./pages/Services";

function RoutesView() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projects/:slug" element={<PropertyDetail />} />
			<Route path="/services" element={<Services />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route
				path="*"
				element={<h1 className="text-3xl font-bold">Not Found</h1>}
			/>
		</Routes>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="flex min-h-screen flex-col bg-white text-slate-900">
				<TopBar />
				<Header />
				<main className="flex-1">
					<RoutesView />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
