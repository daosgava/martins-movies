/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				domain: "dummyimage.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "image.tmdb.org",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
