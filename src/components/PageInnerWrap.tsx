type PageInnerWrapProps = {
	children: React.ReactNode;
	className?: string;
};

export default function PageInnerWrap({
	children,
	className,
}: PageInnerWrapProps) {
	return (
		<div
			className={`mx-auto w-[80vw] sm:w-[calc(100%-200px)] ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
