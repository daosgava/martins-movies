import { FC, ReactNode } from "react";

type MainProps = {
	children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => (
	<main className="flex min-h-screen flex-col items-center p-16">
		{children}
	</main>
);

export default Main;
