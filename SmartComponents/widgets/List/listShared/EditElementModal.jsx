import { useState } from "react";
import { Button, Input, ListModalField } from "../../..";
import close from "../../../assets/close.svg";

function _EditElementModal({
	type,
	list,
	setList,
	setEditListModal,
	modalBackground,
	target,
}) {
	const [currentValue, setCurrentValue] = useState(target);
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
					onClick={setEditListModal}
					value={false}
					innerText={<img src={close} />}
				/>
			</div>
			<div className="smart-list-create-modal-body">
				<ListModalField
					type={type}
					valueState={[currentValue, setCurrentValue]}
				/>
			</div>
			<Button
				innerText={"save"}
				onClick={() => {
					const newList = [];
					list.forEach((element) => {
						element != target
							? newList.push(element)
							: newList.push(currentValue);
					});
					setList(newList);
					setEditListModal(false);
				}}
			/>
		</div>
	);
}

export default _EditElementModal;
