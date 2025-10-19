import { useState } from "react";
import config from "../config";

function _CheckBox({
	label = null,
	list = null,
	setList = null,
	target = null,
	object = null,
	setObject = null,
	path = null,
	value = null,
	setValue = null,
	options = [true, false],
	sideEffect,
}) {
	let mode;
	let initialValue;

	if (list != null && target != null) {
		mode = "list";
		initialValue = list.includes(target);
	} else if (object != null && path != null) {
		mode = "obj";
		const currentValue = path.reduce((acc, key) => acc?.[key], object);
		initialValue = currentValue == options[0];
	} else if (value != null) {
		mode = "val";
		initialValue = value == options[0];
	} else {
		throw console.error("something went wrong: can't set mode");
	}

	const [current, setCurrent] = useState(initialValue);

	function onChange() {
		if (mode == "val") {
			let temp;
			current ? (temp = options[1]) : (temp = options[0]);
			setValue(temp);
			setCurrent((prev) => !prev);
			sideEffect && sideEffect(temp);
		} else if (mode == "list") {
			let temp = list;
			console.log(current);
			if (current) {
				temp = temp.filter((elem) => {
					return elem != target;
				});
				setList(temp);
			} else if (!current) {
				temp = [...temp, target];
				setList(temp);
			}
			setCurrent((prev) => !prev);

			sideEffect && sideEffect(temp);
		} else if (mode == "obj") {
			let temp;
			function updateNestedValue(obj, path, newValue) {
				if (path.length === 0) return newValue;
				const [key, ...rest] = path;
				return {
					...obj,
					[key]: updateNestedValue(obj[key], rest, newValue),
				};
			}
			const newValue = current ? options[1] : options[0];
			temp = updateNestedValue(object, path, newValue);
			setObject(temp);
			setCurrent((prev) => !prev);
			sideEffect && sideEffect(temp);
		}
	}

	return (
		<div className={`sc-checkbox-container`} style={config.checkboxConatiner}>
			{label && (
				<div className="sc-checkbox-label" style={config.checkboxLable}>
					{label}
				</div>
			)}
			<input
				type="checkbox"
				className="cs-checkbox"
				checked={current}
				value={current}
				onChange={onChange}
				style={config.checkbox}
			/>
		</div>
	);
}

export default _CheckBox;
