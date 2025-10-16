import { CreateElementModal, EditElementModal, ListHeader } from "../..";
import { ListBody } from "../..";

import { useState } from "react";

function _List({
	list,
	setList,
	listName,
	isCollapsable = false,
	width = "auto",
	type = "string",
	modalBackground = "#00000060",
	editable = true,
}) {
	const [collapsed, setCollapsed] = useState(false);
	const [editListModal, setEditListModal] = useState(false);
	const [createElementModal, setCreateElementModal] = useState(false);
	const [editTarget, setEditTarget] = useState(false);

	return (
		<div className="smart-list" style={{ width: width }}>
			<div className="modals">
				{editListModal && (
					<EditElementModal
						setEditListModal={setEditListModal}
						target={editTarget}
						type={"string"}
						setList={setList}
					/>
				)}
				{createElementModal && (
					<CreateElementModal
						modalBackground={modalBackground}
						setCreateMosetCreateElementModaldal={setCreateElementModal}
						type={type}
						setList={setList}
					/>
				)}
			</div>
			<ListHeader
				listName={listName}
				isCollapsable={isCollapsable}
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
			{!collapsed && (
				<ListBody
					editable={editable}
					list={list}
					setList={setList}
					setEditListModal={setEditListModal}
					setNewElementModal={setCreateElementModal}
					setEditTarget={setEditTarget}
				/>
			)}
		</div>
	);
}

export default _List;
