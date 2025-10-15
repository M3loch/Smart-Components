import { TableControls, TableValue } from "../../..";
import { randomKey } from "../../../lib/utils";

function _TableRow({
	index,
	object = {},
	values = [],
	rowClassName,
	valueClassName,
	controlClassName,
	editable,
	editSrc,
	deleteSrc,
	isDraggable,
	setObjects,
	objects,
	dragIndex,
	setDragIndex,
	deleteObject,
	setIsEditModalOpen,
	setEditTarget,
}) {
	function handleDragStart(index) {
		setDragIndex(index);
	}

	function handleDragOver(e) {
		e.preventDefault();
	}

	function handleDrop(index) {
		const newObjects = [...objects];
		const draggedObject = newObjects[dragIndex];
		newObjects.splice(dragIndex, 1);
		newObjects.splice(index, 0, draggedObject);
		setObjects(newObjects);
		setDragIndex(null);
	}
	const _styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		textAlign: "center",
	};
	const _maxWidth = (1 / (values.length + 2)) * 100;
	return isDraggable ? (
		<div
			className={`smart-table-row ${rowClassName}`}
			style={(() => {
				_styles.cursor = "move";
				return _styles;
			})()}
			onDragStart={() => handleDragStart(index)}
			onDragOver={handleDragOver}
			onDrop={() => handleDrop(index)}
			draggable
		>
			<TableValue
				value={index + 1}
				className={rowClassName + " smart-table-row-counter"}
				_maxWidth={_maxWidth}
				_width={`${_maxWidth}%`}
			/>
			{values.map((value) => (
				<TableValue
					key={randomKey()}
					value={object[value]}
					className={valueClassName}
					_maxWidth={_maxWidth}
				/>
			))}
			{editable && (
				<TableControls
					className={controlClassName}
					_maxWidth={_maxWidth}
					editSrc={editSrc}
					deleteSrc={deleteSrc}
					deleteObject={deleteObject}
					index={index}
					setObjects={setObjects}
					setIsEditModalOpen={setIsEditModalOpen}
					setEditTarget={setEditTarget}
				/>
			)}
		</div>
	) : (
		<div className={`smart-table-row ${rowClassName}`} style={_styles}>
			<TableValue
				value={index}
				className={rowClassName}
				_maxWidth={_maxWidth}
			/>
			{values.map((value) => (
				<TableValue
					key={randomKey()}
					value={object[value]}
					className={valueClassName}
					_maxWidth={_maxWidth}
				/>
			))}
			{editable && (
				<TableControls
					className={controlClassName}
					_maxWidth={_maxWidth}
					index={index}
					editSrc={editSrc}
					deleteSrc={deleteSrc}
					deleteObject={deleteObject}
					setObjects={setObjects}
					setIsEditModalOpen={setIsEditModalOpen}
					setEditTarget={setEditTarget}
				/>
			)}
		</div>
	);
}

export default _TableRow;
