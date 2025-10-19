import config from "../../../config";
import { randomKey } from "../../../lib/utils";

function _TableLabel({ columnNames = [], editable }) {
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	};
	const _maxWidth = (1 / (columnNames.length + 2)) * 100;

	const _columnStyle = {
		textAlign: "center",
		textWrap: "wrap",
		flex: 1,
		maxWidth: `${_maxWidth}%`,
		width: `100%`,
	};

	return (
		<div
			className={"sc-table-label"}
			style={{ ..._styles, ...config.tableLabel }}
		>
			<div className={"sc-table-first-column"} style={_columnStyle} />
			{columnNames.map((column) => {
				return (
					<div
						key={randomKey()}
						className={"sc-table-column"}
						style={_columnStyle}
					>
						{column}
					</div>
				);
			})}
			{editable && (
				<div
					className={"sc-table-controlls-column"}
					style={{
						minWidth: `${_maxWidth}%`,
					}}
				/>
			)}
		</div>
	);
}

export default _TableLabel;
