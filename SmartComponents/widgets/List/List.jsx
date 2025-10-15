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
}) {
	const [collapsed, setCollapsed] = useState(false);
	const [editListModal, setEditListModal] = useState(false);
	const [createtModal, setCreateElementModal] = useState(false);

	return (
		<div className="smart-list" style={{ width: width }}>
			<div className="modals">
				{editListModal && <EditElementModal />}
				{createtModal && (
					<CreateElementModal
						modalBackground={modalBackground}
						setCreateModal={setCreateElementModal}
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
					list={list}
					setList={setList}
					setEditListModal={setEditListModal}
					setNewElementModal={setCreateElementModal}
				/>
			)}
		</div>
	);
}

export default _List;
