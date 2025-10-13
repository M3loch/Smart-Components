import { useState } from "react";
import { Button, TableModalField } from "../../..";
import close from "../../../assets/close.svg";
import { randomKey } from "../../../lib/utils";

function _CreateModal({
	setIsCreateModalOpen,
	modalBackground,
	className = "",
	closeSrc,
	columnNames,
	model,
	setObjects,
	saveButtonText,
}) {
	const [newObject, setNewObject] = useState({});
	function objectSetter(key, newValue) {
		newObject[key] = newValue;
		setNewObject(newObject);
	}
	return (
		<div
			className={`smart-table-edit-modal ${className}`}
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
			<div className="smart-table-edit-modal-header">
				<Button
					onClick={setIsCreateModalOpen}
					value={false}
					innerText={<img src={closeSrc ? closeSrc : close} />}
				/>
			</div>
			<div className="smart-table-create-modal">
				{Object.keys(model).map((key, index) => {
					return (
						<TableModalField
							key={randomKey()}
							param={columnNames[index]}
							type={Array.isArray(model[key]) ? "array" : model[key]}
							options={Array.isArray(model[key]) ? model[key] : null}
							valueState={["", (newValue) => objectSetter(key, newValue)]}
						/>
					);
				})}
				<Button
					onClick={() => {
						let stopper = false;
						Object.keys(model).map((key) => {
							console.log(newObject[key]);
							if (!newObject[key]) {
								stopper = true;
							}
						});
						if (stopper) return;
						setObjects((prev) => {
							prev.push(newObject);
							return prev;
						});
						setIsCreateModalOpen(false);
					}}
					innerText={saveButtonText}
				/>
			</div>
		</div>
	);
}

export default _CreateModal;
