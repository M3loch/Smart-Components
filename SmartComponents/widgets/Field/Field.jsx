import { useState } from "react";
import { Button, Input, Select, Textarea } from "../..";
import config from "../../config";

function _Field({
	value,
	setValue,
	label,
	type = "string",
	options = [],
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
					placeholder={label}
					className={"smart-field-input"}
					style={emptyField ? config.fieldInputIncorrect : config.fieldInput}
					type={type}
				/>
			);
			break;
		case "number":
			_input = (
				<Input
					value={_value}
					setValue={_setValue}
					placeholder={label}
					style={emptyField ? config.fieldInputIncorrect : config.fieldInput}
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
					selectorName={label}
				/>
			);
		default:
			break;
	}
	return (
		<div className={"smart-field"} style={{ ...config.field, width: width }}>
			{editMode ? (
				<div style={config.fieldInputContainer}>
					{_input}
					<Button
						className="smart-field-button"
						innerText={
							config.saveButtonImg ? (
								<img src={config.saveButtonImg} />
							) : (
								config.saveButtonText
							)
						}
						onClick={() => {
							if (_value) {
								setEditMode(false);
								setEmptyField(false);
								setValue(_value);
							} else {
								setEmptyField(true);
							}
						}}
						style={config.fieldSaveBottom}
					/>
				</div>
			) : (
				<div
					className="smart-field-value-container"
					onClick={() => {
						editable && setEditMode(true);
					}}
					style={{ ...config.fieldValueContainer }}
				>
					<p className="smart-field-value" style={{ ...config.fieldValue }}>
						{value}
					</p>
				</div>
			)}
			<p
				className="smart-field-label"
				style={{ ...config.fieldLabel, opacity: 0.5 }}
			>
				{label}
			</p>
		</div>
	);
}

export default _Field;
