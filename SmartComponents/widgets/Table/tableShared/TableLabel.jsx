import { randomKey } from "../../../lib/utils";

function _TableLabel({ columnNames = [], editable }) {
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	};

	const _maxWidth = (1 / (columnNames.length + 2)) * 100;
	return (
		<div className={"smart-table-label"} style={_styles}>
			<div
				className={"smart-table-first-column"}
				style={{
					textAlign: "center",
					wordBreak: "break-all",
					textWrap: "wrap",
					flex: 1,
					maxWidth: `${_maxWidth}%`,
					width: `100%`,
				}}
			/>
			{columnNames.map((column) => {
				return (
					<div
						key={randomKey()}
						className={"smart-table-column"}
						style={{
							textAlign: "center",
							wordBreak: "break-all",
							textWrap: "wrap",
							flex: 1,
							maxWidth: `${_maxWidth}%`,
						}}
					>
						{column}
					</div>
				);
			})}
			{editable && (
				<div
					className={"smart-table-controls-column"}
					style={{
						minWidth: `${_maxWidth}%`,
					}}
				/>
			)}
		</div>
	);
}

export default _TableLabel;
