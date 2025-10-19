import { useState } from "react";
import _TableHeader from "./tableShared/TableHeader";
import { CreateModal, EditModal, TableBody, TableHeader } from "../..";
import config from "../../config";

function _Table({
	tableName,
	columnNames = [],
	CustomCreateModal = null,
	CustomEditModal = null,

	objects = [],
	setObjects,
	values = [],
	model = {},
	isCollapsable = false,
	isCollapsed = false,
	isDraggable = false,
	editable = false,
	width = "auto",
}) {
	const [_isCollapsed, _setIsCollapsed] = useState(isCollapsed);
	const [dragIndex, setDragIndex] = useState(null);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [editTarget, setEditTarget] = useState(null);

	return (
		<>
			{isEditModalOpen &&
				(CustomEditModal ? (
					<CustomEditModal
						setObjects={setObjects}
						setModal={setIsEditModalOpen}
						objects={objects}
						target={editTarget}
					/>
				) : (
					<EditModal
						setIsModalOpen={setIsEditModalOpen}
						editTarget={editTarget}
						objects={objects}
						setObjects={setObjects}
						columnNames={columnNames}
						model={model}
					/>
				))}
			{isCreateModalOpen &&
				(CustomCreateModal ? (
					<CustomCreateModal
						setObjects={setObjects}
						setModal={setIsCreateModalOpen}
						objects={objects}
					/>
				) : (
					<CreateModal
						setIsCreateModalOpen={setIsCreateModalOpen}
						modalBackground={config.modalBackground}
						model={model}
						objects={objects}
						setObjects={setObjects}
						columnNames={columnNames}
					/>
				))}
			<div className="smart-table" style={{ width: width, ...config.table }}>
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
