import { Button, TableLabel, TableRow } from "../../..";
import { randomKey } from "../../../lib/utils";

function _TableBody({
	columnNames,
	firstColumnClassName,
	labelClassName,
	columnClassName,
	rowClassName,
	valueClassName,
	objects = [],
	setObjects,
	isDraggable,
	values = [],
	editable,
	controlsClassName,
	editSrc,
	deleteSrc,
	dragIndex,
	setDragIndex,
	deleteObject,
	setIsEditModalOpen,
	setEditTarget,
	addNewLineText,
	setIsCreateModalOpen,
}) {
	return (
		<div className="smart-table-body">
			<TableLabel
				columnNames={columnNames}
				firstColumnClassName={firstColumnClassName}
				labelClassName={labelClassName}
				columnClassName={columnClassName}
				editable={editable}
			/>
			{objects.map((object, index) => (
				<TableRow
					key={randomKey()}
					index={index}
					editable={editable}
					object={object}
					values={values}
					rowClassName={rowClassName}
					valueClassName={valueClassName}
					controlsClassName={controlsClassName}
					editSrc={editSrc}
					deleteSrc={deleteSrc}
					isDraggable={isDraggable}
					setObjects={setObjects}
					objects={objects}
					dragIndex={dragIndex}
					setDragIndex={setDragIndex}
					deleteObject={deleteObject}
					setIsEditModalOpen={setIsEditModalOpen}
					setEditTarget={setEditTarget}
				/>
			))}
			{editable && (
				<div
					className="smart-table-create-button-container"
					style={{ padding: "5px" }}
				>
					<Button
						innerText={addNewLineText}
						style={{ width: "100%" }}
						onClick={setIsCreateModalOpen}
						value={true}
						className="smart-table-new-button"
					/>
				</div>
			)}
		</div>
	);
}

export default _TableBody;
