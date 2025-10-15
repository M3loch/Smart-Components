import { useState } from "react";
import _TableHeader from "./tableShared/TableHeader";
import { CreateModal, EditModal, TableBody, TableHeader } from "../..";

import "../../styles/table.css";

function _Table({
	tableName,
	isCollapsable = false,
	isCollapsed = false,
	columnNames = [],
	firstColumnClassName = "",
	labelClassName = "",
	columnClassName = "",
	rowClassName = "",
	valueClassName = "",
	controlsClassName = "",
	editModalClassName = "",
	modalBackground = "#00000060",
	objects = [],
	setObjects,
	isDraggable = false,
	values = [],
	width = "auto",
	height = "auto",
	editable = false,
	editSrc = null,
	deleteSrc = null,
	closeSrc = null,
	deleteObject,
	model = {},
	saveButtonText = "save",
	addNewLineText = "add",
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
					className={editModalClassName}
					modalBackground={modalBackground}
					columnNames={columnNames}
					model={model}
					saveButtonText={saveButtonText}
					closeSrc={closeSrc}
				/>
			)}
			{isCreateModalOpen && (
				<CreateModal
					setIsCreateModalOpen={setIsCreateModalOpen}
					modalBackground={modalBackground}
					closeSrc={closeSrc}
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
						firstColumnClassName={firstColumnClassName}
						labelClassName={labelClassName}
						columnClassName={columnClassName}
						rowClassName={rowClassName}
						valueClassName={valueClassName}
						objects={objects}
						isDraggable={isDraggable}
						values={values}
						setObjects={setObjects}
						controlsClassName={controlsClassName}
						editSrc={editSrc}
						deleteSrc={deleteSrc}
						setDragIndex={setDragIndex}
						dragIndex={dragIndex}
						deleteObject={deleteObject}
						setIsEditModalOpen={setIsEditModalOpen}
						setEditTarget={setEditTarget}
						addNewLineText={addNewLineText}
						setIsCreateModalOpen={setIsCreateModalOpen}
					/>
				)}
			</div>
		</>
	);
}

export default _Table;
