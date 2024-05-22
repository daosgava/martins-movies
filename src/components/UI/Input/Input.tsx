const Input = () => (
	<div className="relative flex items-center w-[300px]">
		<input
			type="text"
			name="search"
			id="search"
			placeholder="Type a keyword..."
			className="block w-full rounded-md border-1 p-4 text-gray-900 shadow-sm ring-1 outline-0 ring-gray-300 placeholder:text-gray-400"
		/>
	</div>
);
export default Input;
