import { useState } from "react";
import { Input, Select } from "../../..";

function _TableModalField({ param, valueState, type, options }) {
	const [value, setValue] = useState(valueState[0]);

	let field;

	switch (type) {
		case "string":
			field = (
				<div className="smart-table-modal-field">
					<div className="smart-table-modal-field-param-name">{param}</div>
					<Input
						value={value}
						setValue={setValue}
						placeholder={param}
						type={type}
						sideEffect={valueState[1]}
					/>
				</div>
			);
			break;
		case "number":
			field = (
				<div className="smart-table-modal-field">
					<div className="smart-table-modal-field-param-name">{param}</div>
					<Input
						value={value}
						setValue={setValue}
						placeholder={param}
						type={type}
						sideEffect={valueState[1]}
					/>
				</div>
			);
			break;
		case "array":
			field = (
				<div className="smart-table-modal-field">
					<div className="smart-table-modal-field-param-name">{param}</div>
					<Select
						options={options}
						setOption={setValue}
						initValue={value}
						sideEffect={valueState[1]}
						selectorName={param}
					/>
				</div>
			);
			break;
		default:
			field = "error";
	}
	return field;
}

export default _TableModalField;
