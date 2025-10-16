import { useState } from "react";
import { Button, Input, Select, Textarea } from "../..";
import "../../styles/field.css";

function _Field({
	value,
	setValue,
	placeholder,
	type = "string",
	options = [],
	saveText = "Save",
	editable = "true",
	width = "auto",
}) {
	const [editMode, setEditMode] = useState(false);
	const [emptyField, setEmptyField] = useState(false);
	const [_value, _setValue] = useState(value);

	let _input;

	switch (type) {
		case "string":
			_input = (
				<Input
					value={_value}
					setValue={_setValue}
					placeholder={placeholder}
					className={"smart-field-input"}
					style={emptyField ? { border: "solid red 1px" } : null}
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
		<div className={`smart-field ${className}`} style={{ width: width }}>
			{editMode ? (
				<div>
					{_input}
					<Button
						className="smart-field-button"
						innerText={saveText}
						onClick={() => {
							if (_value) {
								setEditMode(false);
								setEmptyField(false);
								setValue(_value);
							} else {
								setEmptyField(true);
							}
						}}
					/>
				</div>
			) : (
				<div
					className="smart-field-value-container"
					onClick={() => {
						editable && setEditMode(true);
					}}
				>
					<p className="smart-field-value">{value}</p>
				</div>
			)}
			<p className="smart-field-placeholder" style={{ opacity: 0.5 }}>
				{placeholder}
			</p>
		</div>
	);
}

export default _Field;
