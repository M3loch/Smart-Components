import { CheckBox } from "../../..";

function _ListHeader({ listName, isCollapsable, collapsed, setCollapsed }) {
	const _style = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0px 10px",
	};

	return (
		<div className="list-header" style={_style}>
			<p>{listName}</p>
			{isCollapsable && (
				<CheckBox setChecked={setCollapsed} checked={!collapsed} />
			)}
		</div>
	);
}

export default _ListHeader;
