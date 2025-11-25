import { classNames } from "../utils/classnames";

type HRProps = {
	className?: string;
};

export default function HR({ className = "" }: HRProps) {
	const hasMarginBottom = className && /\bmb-/.test(className);
	return (
		<hr
			className={classNames(
				"w-[90px] h-px mx-auto bg-[#1e283a] border-none",
				!hasMarginBottom && "mb-[1.3rem]",
				className,
			)}
		/>
	);
}
