import { Button } from "../../..";
import config from "../../../config";

function _ListControls({
	list,
	setList,
	target,
	setEditListModal,
	setEditTarget,
}) {
	function removeFromList() {
		const temp = list.filter((elem) => elem != target);
		setList(temp);
	}
	return (
		<div
			className="list-controls"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
				textWrap: "wrap",
				flex: 1,
				boxSizing: "content-box",
				...config.listRowControls,
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
				style={config.listControlsButton}
				onClick={() => {
					setEditListModal(true);
					setEditTarget(target);
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
				style={config.listControlsButton}
				onClick={removeFromList}
			/>
		</div>
	);
}

export default _ListControls;
