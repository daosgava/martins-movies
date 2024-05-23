"use client";

import { FC } from "react";

type ButtonProps = {
	link: string;
	children: string;
};

const Button: FC<ButtonProps> = ({ link, children }) => {
	return (
		<button
			className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-md mt-2 w-[140px]"
			onClick={() => window.open(link, "_blank")}
		>
			{children}
		</button>
	);
};

export default Button;
