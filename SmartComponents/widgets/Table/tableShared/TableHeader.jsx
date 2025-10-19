import { CheckBox } from "../../..";
import config from "../../../config";

function _TableHeader({ tableName, isCollapsable, collapsed, setCollapsed }) {
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 20px",
	};
	return (
		<div
			className={"sc-table-header"}
			style={
				collapsed
					? { ...config.tableHeaderCollapsed, ..._styles }
					: { ...config.tableHeaderOpened, ..._styles }
			}
		>
			<p className="sc-table-name" style={config.tableName}>
				{tableName}
			</p>
			{isCollapsable && (
				<CheckBox
					value={collapsed}
					setValue={setCollapsed}
					options={[false, true]}
				/>
			)}
		</div>
	);
}

export default _TableHeader;
