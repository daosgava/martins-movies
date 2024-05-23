"use client";
import { useDebouncedCallback } from "use-debounce";
import Input from "../Input/Input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const InputSearch = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleOnChange = useDebouncedCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;

			const params = new URLSearchParams(searchParams);
			if (value) {
				params.set("keyword", value);
			} else {
				params.delete("keyword");
			}

			replace(`${pathname}?${params.toString()}`);
		},
		300,
	);

	return (
		<div className="relative flex items-center w-[300px]">
			<Input
				onChange={handleOnChange}
				placeholder="Search for movies"
				type="text"
				name="search"
				id="search"
				defaultValue={searchParams.get("keyword")?.toString()}
			/>
		</div>
	);
};

export default InputSearch;
