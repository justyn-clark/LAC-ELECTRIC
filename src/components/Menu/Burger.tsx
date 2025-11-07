type BurgerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export default function Burger({ open, setOpen }: BurgerProps) {
	return (
		<button
			type="button"
			aria-label="Mobile menu button"
			onClick={() => setOpen(!open)}
			style={{
				flexDirection: "column",
				justifyContent: "space-around",
				position: "absolute",
				width: "2rem",
				height: "2rem",
				top: "20px",
				left: "1.5rem",
				background: "transparent",
				border: "none",
				cursor: "pointer",
				padding: 0,
				zIndex: 10,
			}}
			className="flex sm:hidden"
			onFocus={(e) => e.currentTarget.blur()}
		>
			<div
				style={{
					width: "2rem",
					height: "0.25rem",
					background: "#1e283a",
					borderRadius: "10px",
					transition: "all 0.3s linear",
					position: "relative",
					transformOrigin: "1px",
					transform: open ? "rotate(45deg)" : "rotate(0)",
				}}
			/>
			<div
				style={{
					width: "2rem",
					height: "0.25rem",
					background: "#1e283a",
					borderRadius: "10px",
					transition: "all 0.3s linear",
					position: "relative",
					transformOrigin: "1px",
					opacity: open ? 0 : 1,
				}}
			/>
			<div
				style={{
					width: "2rem",
					height: "0.25rem",
					background: "#1e283a",
					borderRadius: "10px",
					transition: "all 0.3s linear",
					position: "relative",
					transformOrigin: "1px",
					transform: open ? "rotate(-45deg)" : "rotate(0)",
				}}
			/>
		</button>
	);
}
