import { Button, TableLabel, TableRow } from "../../..";
import config from "../../../config";
import { randomKey } from "../../../lib/utils";

function _TableBody({
	columnNames,
	objects = [],
	setObjects,
	isDraggable,
	values = [],
	editable,
	dragIndex,
	setDragIndex,
	setIsEditModalOpen,
	setEditTarget,
	setIsCreateModalOpen,
}) {
	return (
		<div className="smart-table-body">
			<TableLabel columnNames={columnNames} editable={editable} />
			{objects.map((object, index) => (
				<TableRow
					key={randomKey()}
					index={index}
					editable={editable}
					object={object}
					values={values}
					isDraggable={isDraggable}
					setObjects={setObjects}
					objects={objects}
					dragIndex={dragIndex}
					setDragIndex={setDragIndex}
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
						innerText={config.createButtonText || config.careateButtonImg}
						style={{ width: "100%", padding: "5px" }}
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
