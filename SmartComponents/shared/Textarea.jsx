import { useEffect, useRef } from "react";

function _Textarea({
	placeholder,
	className,
	value,
	setValue,
	sideEffect = null,
	max = null,
	label = null,
}) {
	const textareaRef = useRef(null);

	function changeEvent(event) {
		const val = event.target.value;
		sideEffect && sideEffect();
		if (max !== null && val.length > max) return;
		setValue(val);
	}

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [value]);

	return (
		<div className="smart-textarea-container">
			{label && <div className="smart-textarea-label">{label}</div>}
			<textarea
				className={`smart-text-area ${className}`}
				ref={textareaRef}
				placeholder={placeholder}
				value={value}
				onChange={changeEvent}
			/>
		</div>
	);
}

export default _Textarea;
