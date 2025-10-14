import { useState } from "react";
import { Button, Input, Select, Textarea } from "../..";

function _Field({
	value,
	setValue,
	className,
	placeholder,
	type = "string",
	options = [],
	saveText = "Save",
}) {
	const [editMode, setEditMode] = useState(false);
	const [_value, _setValue] = useState(value);

	let _input;

	switch (type) {
		case "string":
			_input = (
				<Input
					value={_value}
					setValue={_setValue}
					placeholder={placeholder}
					type={type}
				/>
			);
			break;
		case "number":
			_input = (
				<Input
					value={_value}
					setValue={_setValue}
					placeholder={placeholder}
					type={type}
				/>
			);
		case "textarea":
			_input = <Textarea value={value} setValue={setValue} />;
		case "select":
			_input = (
				<Select
					options={options}
					initValue={_value}
					setOption={_setValue}
					selectorName={placeholder}
				/>
			);
		default:
			break;
	}
	return (
		<div className={`smart-field ${className}`}>
			{editMode ? (
				<div>
					{_input}
					<Button
						innerText={saveText}
						onClick={() => {
							setEditMode(false);
							setValue(_value);
							console.log("sad");
						}}
					/>
				</div>
			) : (
				<div onClick={() => setEditMode(true)}>
					<p>{value}</p>
					<p style={{ opacity: 0.5 }}>{placeholder}</p>
				</div>
			)}
		</div>
	);
}

export default _Field;
