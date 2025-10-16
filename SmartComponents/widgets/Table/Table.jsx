import { useState } from "react";
import _TableHeader from "./tableShared/TableHeader";
import { CreateModal, EditModal, TableBody, TableHeader } from "../..";
import config from "../../config";

import "../../styles/table.css";
function _Table({
	tableName,
	columnNames = [],
	objects = [],
	setObjects,
	values = [],
	model = {},
	isCollapsable = false,
	isCollapsed = false,
	isDraggable = false,
	editable = false,
	width = "auto",
	height = "auto",
	saveButtonText = "save",
	createButtonText = config.createButtonText,
	modalBackground = config.modalBackground,
}) {
	const [_isCollapsed, _setIsCollapsed] = useState(isCollapsed);
	const [dragIndex, setDragIndex] = useState(null);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [editTarget, setEditTarget] = useState(null);

	return (
		<>
			{isEditModalOpen && (
				<EditModal
					setIsModalOpen={setIsEditModalOpen}
					editTarget={editTarget}
					objects={objects}
					setObjects={setObjects}
					modalBackground={modalBackground}
					columnNames={columnNames}
					model={model}
					saveButtonText={saveButtonText}
				/>
			)}
			{isCreateModalOpen && (
				<CreateModal
					setIsCreateModalOpen={setIsCreateModalOpen}
					modalBackground={modalBackground}
					model={model}
					setObjects={setObjects}
					saveButtonText={saveButtonText}
					columnNames={columnNames}
				/>
			)}
			<div className="smart-table" style={{ width: width, height: height }}>
				<TableHeader
					tableName={tableName}
					isCollapsable={isCollapsable}
					collapsed={_isCollapsed}
					setCollapsed={_setIsCollapsed}
				/>
				{!_isCollapsed && (
					<TableBody
						editable={editable}
						columnNames={columnNames}
						objects={objects}
						isDraggable={isDraggable}
						values={values}
						setObjects={setObjects}
						setDragIndex={setDragIndex}
						dragIndex={dragIndex}
						setIsEditModalOpen={setIsEditModalOpen}
						setEditTarget={setEditTarget}
						setIsCreateModalOpen={setIsCreateModalOpen}
					/>
				)}
			</div>
		</>
	);
}

export default _Table;
