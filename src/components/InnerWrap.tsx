type InnerWrapProps = {
	children: React.ReactNode;
	className?: string;
};

export default function InnerWrap({ children, className }: InnerWrapProps) {
	return (
		<div
			className={`mx-auto w-[90vw] max-w-full px-4 sm:w-[calc(100%-80px)] sm:px-6 md:w-[calc(100%-120px)] md:px-8 ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
