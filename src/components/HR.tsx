import { classNames } from "../utils/classnames";

type HRProps = {
	className?: string;
};

export default function HR({ className = "" }: HRProps) {
	return (
		<hr
			className={classNames(
				"w-[90px] h-px mx-auto mb-[1.3rem] bg-[#1e283a] border-none",
				className,
			)}
		/>
	);
}
