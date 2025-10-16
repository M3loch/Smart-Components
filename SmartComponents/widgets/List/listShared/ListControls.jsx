import { Button } from "../../..";
import _delete from "../../../assets/delete.svg";
import _edit from "../../../assets/edit.svg";

function _ListControls({ setList, target, setEditListModal, setEditTarget }) {
	const _style = {
		display: "flex",
		flexDirection: "row",
		maxWidth: "fit=content",
	};

	function removeFromList() {
		setList((prev) => {
			const temp = prev.filter((elem) => elem != target);
			return temp;
		});
	}
	return (
		<div className="list-controls" style={_style}>
			<Button innerText={<img src={_delete} onClick={removeFromList} />} />
			<Button
				innerText={<img src={_edit} />}
				onClick={() => {
					setEditListModal(true);
					setEditTarget(target);
				}}
			/>
		</div>
	);
}

export default _ListControls;
