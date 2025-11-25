import type { ReactNode } from "react";
import { classNames } from "../utils/classnames";

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
	const hasTextSize = className && /\btext-/.test(className);
	return (
		<h2
			className={classNames(
				"font-bold text-center uppercase m-0",
				!hasTextSize && "text-4xl",
				className,
			)}
		>
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
