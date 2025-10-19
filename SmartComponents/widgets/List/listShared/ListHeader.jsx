import { CheckBox } from "../../..";
import config from "../../../config";

function _ListHeader({ listName, isCollapsable, collapsed, setCollapsed }) {
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 20px",
	};
	return (
		<div
			className={"sc-list-header"}
			style={
				collapsed
					? { ...config.listHeaderCollapsed, ..._styles }
					: { ...config.listHeaderOpened, ..._styles }
			}
		>
			<p className="sc-list-name" style={config.listName}>
				{listName}
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

export default _ListHeader;
