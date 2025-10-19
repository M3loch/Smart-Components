import config from "../../../config";

function _TableValue({ value, _maxWidth, style = config.tableRowValue }) {
	return (
		<div
			className={`smart-table-value`}
			style={{
				textAlign: "center",
				textWrap: "wrap",
				flex: 1,
				maxWidth: `${_maxWidth}%`,
				...style,
			}}
		>
			<p>{value}</p>
		</div>
	);
}

export default _TableValue;
