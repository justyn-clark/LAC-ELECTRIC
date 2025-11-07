import type { ReactNode } from "react";

type HeadingProps = {
	children: ReactNode;
	className?: string;
};

export function H1({ children, className = "" }: HeadingProps) {
	return (
		<h1
			className={`text-[40px] font-bold text-center uppercase m-0 ${className}`}
		>
			{children}
		</h1>
	);
}

export function H2({ children, className = "" }: HeadingProps) {
	return (
		<h2 className={`text-2xl font-bold text-center uppercase m-0 ${className}`}>
			{children}
		</h2>
	);
}

export function H3({ children, className = "" }: HeadingProps) {
	return <h3 className={`uppercase m-0 ${className}`}>{children}</h3>;
}

export function H4({ children, className = "" }: HeadingProps) {
	return (
		<h4 className={`text-lg leading-6 uppercase m-0 ${className}`}>
			{children}
		</h4>
	);
}
