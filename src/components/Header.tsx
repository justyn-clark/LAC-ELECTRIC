import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getContent } from "../content";
import Burger from "./Menu/Burger";

export default function Header() {
	const { navigation } = getContent();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	// Close menu when window is resized to tablet or larger (matching useIsLagerThanTablet)
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="relative block w-screen bg-white py-2.5 md:py-4">
			<Burger open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
			<div className="flex flex-col justify-center items-center w-[90vw] mx-auto md:flex-row md:justify-between md:w-[calc(100%-200px)] md:h-auto">
				<Link to="/" className="logo h-auto w-[50px] md:w-20">
					<img src="/logo.png" alt="LAC Electric" className="h-full w-full" />
				</Link>
				<nav
					className={`${mobileMenuOpen ? "flex" : "hidden"} flex-col items-center md:!flex md:flex-row md:items-center md:justify-evenly`}
				>
					<Link
						to="/"
						onClick={() => setMobileMenuOpen(false)}
						style={{
							position: "relative",
							margin: "0.6rem 1rem",
							color: "#1e283a",
							fontFamily: "'Roboto Condensed', sans-serif",
							fontWeight: 400,
							fontSize: "19px",
							textDecoration: "none",
							transition: "all ease 0.2s",
						}}
						className={`md:!my-0 md:mx-4 ${location.pathname === "/" ? "active" : ""}`}
					>
						Home
						<span
							style={{
								position: "absolute",
								top: "100%",
								left: 0,
								width: "100%",
								height: "2px",
								background: "#f20079",
								opacity: location.pathname === "/" ? 1 : 0,
								transition: "opacity 0.3s, transform 0.3s",
								transform:
									location.pathname === "/"
										? "translateY(0px)"
										: "translateY(10px)",
							}}
							className="hover:opacity-100 hover:translate-y-0"
						/>
					</Link>
					{navigation?.map((n) => (
						<Link
							key={n.path}
							to={n.path}
							onClick={() => setMobileMenuOpen(false)}
							style={{
								position: "relative",
								margin: "0.6rem 1rem",
								color: "#1e283a",
								fontFamily: "'Roboto Condensed', sans-serif",
								fontWeight: 400,
								fontSize: "19px",
								textDecoration: "none",
								transition: "all ease 0.2s",
							}}
							className={`md:!my-0 md:mx-4 ${location.pathname === n.path ? "active" : ""}`}
						>
							{n.label}
							<span
								style={{
									position: "absolute",
									top: "100%",
									left: 0,
									width: "100%",
									height: "2px",
									background: "#f20079",
									opacity: location.pathname === n.path ? 1 : 0,
									transition: "opacity 0.3s, transform 0.3s",
									transform:
										location.pathname === n.path
											? "translateY(0px)"
											: "translateY(10px)",
								}}
								className="hover:opacity-100 hover:translate-y-0"
							/>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
