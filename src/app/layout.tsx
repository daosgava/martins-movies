import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header/Header";
import InputSearch from "@/components/UI/InputSearch/InputSearch";
import Main from "@/components/Sections/Main/Main";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Martin's Movie Finder",
	description: "Explore & Discover Movies",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body>
			<Header />
			<Main>
				<Suspense>
					<InputSearch />
				</Suspense>
				{children}
			</Main>
		</body>
	</html>
);

export default RootLayout;
