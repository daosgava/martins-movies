import { FC } from "react";

type InputProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	type: string;
	name: string;
	id: string;
	defaultValue?: string;
};

const Input: FC<InputProps> = ({ onChange, placeholder, type, name, id, defaultValue }) => (
	<div className="relative flex items-center w-[300px]">
		<input
			className="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:leading-6"
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	</div>
);
export default Input;
