import { useState } from "react";
import config from "../config";

function _Button({ label = null, onClick, value, innerText }) {
	const [_style, setStyle] = useState(config.buttonConfig);
	function clickEvent() {
		onClick(value);
	}

	return (
		<div className="sc-button-container">
			{label && <div className="sc-button-label">{label}</div>}
			<button
				style={_style}
				onMouseEnter={() => setStyle(config.buttonHoverConfig)}
				onMouseLeave={() => setStyle(config.buttonConfig)}
				onMouseDown={() => setStyle(config.buttonActiveConfig)}
				onMouseUp={() => setStyle(config.buttonHoverConfig)}
				className="sc-button"
				onClick={clickEvent}
			>
				{innerText}
			</button>
		</div>
	);
}

export default _Button;
