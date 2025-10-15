function _Button({
	label = null,
	onClick,
	value,
	innerText,
	className = "",
	style,
}) {
	function clickEvent() {
		onClick(value);
	}

	return (
		<div className="smart-button-container">
			{label && <div className="smart-button-label">{label}</div>}
			<button
				style={style}
				className={`smart-button ${className}`}
				onClick={clickEvent}
			>
				{innerText}
			</button>
		</div>
	);
}

export default _Button;
