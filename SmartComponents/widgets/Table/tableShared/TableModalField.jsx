import { useState } from "react";
import { Input, Select } from "../../..";

function _TableModalField({ param, valueState, type, options }) {
	const state = useState(valueState[0]);

	let field;

	switch (type) {
		case "string":
			field = (
				<div className="smart-table-modal-field">
					<div className="smart-table-modal-field-param-name">{param}</div>
					<Input
						state={state}
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
						state={state}
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
						setOption={state[1]}
						initValue={state[0]}
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
