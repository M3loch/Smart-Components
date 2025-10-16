import { Button } from "../../..";
import _edit from "../../../assets/edit.svg";
import _delete from "../../../assets/delete.svg";
import config from "../../../config";

function _TableControls({
	_maxWidth,
	index,
	setObjects,
	setIsEditModalOpen,
	setEditTarget,
}) {
	const deleteSrc = (() => {
		config.deleteButtonText || config.deleteButtonImg;
	})();
	const editSrc = (() => {
		config.editButtonText || config.editButtonImg;
	})();
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
				maxWidth: `calc(${_maxWidth}%)`,
			}}
		>
			<Button
				innerText={
					editSrc != null ? (
						<img src={editSrc} />
					) : (
						<img src={_edit} style={{ width: "20px" }} />
					)
				}
				onClick={() => {
					setEditTarget(index);
					setIsEditModalOpen(true);
				}}
				style={{ padding: "10px" }}
			/>
			<Button
				innerText={
					deleteSrc != null ? (
						<img src={deleteSrc} />
					) : (
						<img src={_delete} style={{ width: "20px" }} />
					)
				}
				onClick={() =>
					setObjects((prev) => prev.filter((object) => object !== prev[index]))
				}
				style={{ padding: "10px" }}
			/>
		</div>
	);
}

export default _TableControls;
