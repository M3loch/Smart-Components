import { CheckBox } from "../../..";

function _TableHeader({ tableName, isCollapsable, collapsed, setCollapsed }) {
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 20px",
	};
	return (
		<div className="smart-table-header" style={_styles}>
			<p className="smart-table-name">{tableName}</p>
			{isCollapsable && <CheckBox checked={[!collapsed, setCollapsed]} />}
		</div>
	);
}

export default _TableHeader;
