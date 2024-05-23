const ProductListSkeleton = () => {
	return (
		<div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{Array.from({ length: 8 }).map((_, index) => (
				<div
					key={index}
					className="relative bg-slate-300 rounded-xl overflow-hidden animate-pulse"
				>
					<div className="h-[500px] w-[300px]"></div>
				</div>
			))}
		</div>
	);
};

export default ProductListSkeleton;
