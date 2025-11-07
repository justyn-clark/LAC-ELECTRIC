import { Link } from "react-router-dom";
import { getContent } from "../../content";

type MenuProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export default function Menu({ open, setOpen }: MenuProps) {
	const { navigation } = getContent();

	return (
		<nav
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				background: "#effffa",
				transform: open ? "translateX(0)" : "translateX(-100%)",
				width: "100%",
				height: "100vh",
				textAlign: "left",
				padding: "2rem",
				position: "absolute",
				top: 0,
				left: 0,
				transition: "transform 0.3s ease-in-out",
			}}
		>
			<Link
				to="/"
				onClick={() => setOpen(false)}
				style={{
					fontSize: "2rem",
					textTransform: "uppercase",
					padding: "2rem 0",
					fontWeight: "bold",
					letterSpacing: "0.5rem",
					color: "#0d0c1d",
					textDecoration: "none",
					transition: "color 0.3s linear",
				}}
				className="hover:text-[#343078] sm:text-3xl"
			>
				Home
			</Link>
			{navigation?.map((n) => (
				<Link
					key={n.path}
					to={n.path}
					onClick={() => setOpen(false)}
					style={{
						fontSize: "2rem",
						textTransform: "uppercase",
						padding: "2rem 0",
						fontWeight: "bold",
						letterSpacing: "0.5rem",
						color: "#0d0c1d",
						textDecoration: "none",
						transition: "color 0.3s linear",
					}}
					className="hover:text-[#343078] sm:text-3xl"
				>
					{n.label}
				</Link>
			))}
		</nav>
	);
}
