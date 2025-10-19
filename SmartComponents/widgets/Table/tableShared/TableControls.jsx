import { Button } from "../../..";
import _edit from "../../../assets/edit.svg";
import _delete from "../../../assets/delete.svg";
import config from "../../../config";

function _TableControls({
	_maxWidth,
	index,
	objects,
	setObjects,
	setIsEditModalOpen,
	setEditTarget,
}) {
	return (
		<div
			className={"smart-table-controls"}
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
				textWrap: "wrap",
				flex: 1,
				boxSizing: "content-box",
				maxWidth: `${_maxWidth}%`,
				...config.tableRowControls,
			}}
		>
			<Button
				innerText={
					config.editButtonImg ? (
						<img src={config.editButtonImg} />
					) : (
						config.editButtonText
					)
				}
				onClick={() => {
					setEditTarget(index);
					setIsEditModalOpen(true);
				}}
			/>
			<Button
				innerText={
					config.deleteButtonImg ? (
						<img src={config.deleteButtonImg} />
					) : (
						config.deleteButtonText
					)
				}
				onClick={() =>
					setObjects(objects.filter((object) => object !== objects[index]))
				}
			/>
		</div>
	);
}

export default _TableControls;
