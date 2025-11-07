type InnerWrapProps = {
	children: React.ReactNode;
	className?: string;
};

export default function InnerWrap({ children, className }: InnerWrapProps) {
	return (
		<div
			className={`mx-auto w-[80vw] sm:w-[calc(100%-100px)] ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
