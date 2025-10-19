import { useEffect, useRef } from "react";
import config from "../config";

function _Textarea({
	placeholder,
	value,
	setValue,
	sideEffect = null,
	max = null,
	label = null,
}) {
	const textareaRef = useRef(null);

	function changeEvent(event) {
		const val = event.target.value;
		if (max !== null && val.length > max) return;
		setValue(val);
		sideEffect && sideEffect(val);
	}

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [value]);

	return (
		<div className="smart-textarea-container" style={config.textareaContainer}>
			{label && (
				<div className="smart-textarea-label" style={config.textareaLabel}>
					{label}
				</div>
			)}
			<textarea
				className={"smart-text-area"}
				style={config.textarea}
				ref={textareaRef}
				placeholder={placeholder}
				value={value}
				onChange={changeEvent}
			/>
		</div>
	);
}

export default _Textarea;
