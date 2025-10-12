import { Button } from "../../..";
import _edit from "../../../assets/edit.svg";
import _delete from "../../../assets/delete.svg";

function _TableControls({
	_maxWidth,
	className,
	editSrc,
	deleteSrc,
	index,
	setObjects,
	setIsEditModalOpen,
	setEditTarget,
}) {
	return (
		<div
			className={`smart-table-controls ${className}`}
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				textAlign: "center",
				wordBreak: "break-all",
				textWrap: "wrap",
				flex: 1,
				boxSizing: "content-box",
				maxWidth: `${_maxWidth}%`,
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
			/>
		</div>
	);
}

export default _TableControls;
