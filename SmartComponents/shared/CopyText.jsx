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

	const _style = { ...config.copyTextContainer };

	const _tooltip = {
		...config.copyTextToolTip,
		opacity: tooltipOpacity,
		position: "absolute",
	};

	const _popUp = {
		...config.copyTextPopup,
		opacity: popUpOpacity,
		position: "absolute",
	};

	return (
		<div
			className="sc-copy-text-container"
			onClick={copy}
			style={{ ..._style, width: "fit-content" }}
		>
			<div
				className="copy-text"
				onMouseEnter={() => setTooltipOpacity("1")}
				onMouseLeave={() => setTooltipOpacity("0")}
			>
				<p style={config.copyText}>{value}</p>
				<span style={_tooltip} className="sc-copy-tooltip">
					{config.copyTextConfig.tooltipText}
				</span>

				<span style={_popUp} className="sc-copy-popUp]">
					{config.copyTextConfig.popUpText}
				</span>
			</div>
		</div>
	);
}

export default _CopyText;
