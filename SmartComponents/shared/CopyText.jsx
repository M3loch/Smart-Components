import { useState } from "react";
import config from "../config";

function _CopyText({ value }) {
	async function copy() {
		await navigator.clipboard.writeText(value);
		setPopUpOpacity("1");
		setTimeout(() => setPopUpOpacity("0"), 1000);
	}

	const [popUpOpacity, setPopUpOpacity] = useState("0");
	const [tooltipOpacity, setTooltipOpacity] = useState("0");

	const _style = {};

	const _tooltip = { ...config.CopyTextToolTip, opacity: tooltipOpacity };

	const _popUp = {
		...config.CopyTextPopup,
		opacity: popUpOpacity,
	};

	return (
		<div className="sc-copy-text-container" onClick={copy}>
			<div
				className="copy-text"
				onMouseEnter={() => setTooltipOpacity("1")}
				onMouseLeave={() => setTooltipOpacity("0")}
			>
				{value}
				<span style={_tooltip} className="sc-copy-tooltip">
					Копировать
				</span>

				<span style={_popUp} className="sc-copy-status">
					скопированно
				</span>
			</div>
		</div>
	);
}

export default _CopyText;
