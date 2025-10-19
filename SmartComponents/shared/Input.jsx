import config from "../config";

function _Input({
	value,
	setValue,
	label = null,
	type = "text",
	min = null,
	max = null,
	placeholder,
	sideEffect,
	style,
}) {
	if (type == "string") {
		type = "text";
	}

	type == "text" && min < 0 ? (min = 0) : null;

	if (min != null && typeof min != "number") {
		console.error("min property should be valid integer");
		min = null;
	}
	if (max != null && typeof max != "number") {
		console.error('"max" property should be valid integer');
		max = null;
	}

	function onChange(event) {
		const val = event.target.value;

		if (type == "number" && isNaN(val)) {
			return;
		}

		if (max != null) {
			if (type == "number" && Number(val) > max) {
				setValue(max);
			} else if (type == "text" && val.length > max) {
				return;
			}
		}
		if (min != null) {
			if (type == "number" && Number(val) < min) {
				setValue(min);
			}
		}

		switch (type) {
			case "number":
				setValue(BigInt(val));
				break;
			default:
				setValue(val);
		}
		sideEffect && sideEffect(val);
	}

	return (
		<div
			className="smart-input-container smart-container"
			style={config.inputContainer}
		>
			{label && (
				<div style={config.inputLabel} className="smart-input-label">
					{label}
				</div>
			)}

			<input
				placeholder={placeholder}
				style={style || config.input}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default _Input;
