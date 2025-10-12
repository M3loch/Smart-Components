function _TableValue({ value, className, _maxWidth }) {
	return (
		<div
			className={`smart-table-value ${className}`}
			style={{
				textAlign: "center",
				wordBreak: "break-all",
				textWrap: "wrap",
				flex: 1,
				maxWidth: `${_maxWidth}%`,
			}}
		>
			<p>{value}</p>
		</div>
	);
}

export default _TableValue;
