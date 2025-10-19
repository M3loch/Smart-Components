import { useState } from "react";
import { Button, Input, ListModalField } from "../../..";
import close from "../../../assets/close.svg";
import config from "../../../config";

function _CreateElementModal({
	type,
	setList,
	list,
	setCreateElementModal,
	modalBackground,
}) {
	const [newValue, setNewValue] = useState("");
	return (
		<div
			className={`smart-list-create-modal`}
			style={{
				position: "fixed",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: modalBackground,
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				zIndex: 999,
			}}
		>
			<div className="smart-list-create-modal-header">
				<Button
					onClick={setCreateElementModal}
					value={false}
					innerText={<img src={close} />}
				/>
			</div>
			<div className="smart-list-create-modal-body">
				<ListModalField type={type} valueState={[newValue, setNewValue]} />
			</div>
			<Button
				innerText={
					config.saveButtonImg ? (
						<img src={config.saveButtonImg} />
					) : (
						config.saveButtonText
					)
				}
				onClick={() => {
					list.push(newValue);
					setList(list);
					setCreateElementModal(false);
				}}
			/>
		</div>
	);
}

export default _CreateElementModal;
