import { useState } from "react";
import config from "../config";

function _Button({ label = null, onClick, value, innerText, style = {} }) {
	const uniqueStyle = { ...config.buttonConfig, ...style };
	const uniqueHoverStyle = { ...config.buttonHoverConfig, ...style };
	const uniqueActiveStyle = { ...config.buttonActiveConfig, ...style };
	const [_style, setStyle] = useState(uniqueStyle);
	function clickEvent() {
		onClick(value);
	}

	return (
		<div className="sc-button-container">
			{label && <div className="sc-button-label">{label}</div>}
			<button
				style={_style}
				onMouseEnter={() => setStyle(uniqueHoverStyle)}
				onMouseLeave={() => setStyle(uniqueStyle)}
				onMouseDown={() => setStyle(uniqueActiveStyle)}
				onMouseUp={() => setStyle(uniqueHoverStyle)}
				className="sc-button"
				onClick={clickEvent}
			>
				{innerText}
			</button>
		</div>
	);
}

export default _Button;
