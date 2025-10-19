import { useState } from "react";
import { Button, TableModalField } from "../../..";
import close from "../../../assets/close.svg";
import { randomKey } from "../../../lib/utils";
import config from "../../../config";

function _CreateModal({
	setIsCreateModalOpen,
	columnNames,
	model,
	objects,
	setObjects,
}) {
	const [stopper, setStopper] = useState(false);
	const [newObject, setNewObject] = useState({});
	function objectSetter(key, newValue) {
		newObject[key] = newValue;
		setNewObject(newObject);
	}
	return (
		<div
			className={"smart-table-create-modal-bg"}
			style={{
				position: "fixed",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: config.modalBackground,
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				zIndex: 999,
			}}
		>
			<div
				className="smart-table-create-modal"
				style={{ ...config.tableModal }}
			>
				<div
					className="sc-table-create-modal-header"
					style={config.tableModalHeader}
				>
					<Button
						onClick={setIsCreateModalOpen}
						value={false}
						innerText={
							config.closeButtonImg ? (
								<img src={config.closeButtonImg} />
							) : (
								config.closeButtonText
							)
						}
					/>
				</div>
				<div className="sc-table-modal-body" style={config.tableModalBody}>
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
					<p style={stopper ? { color: "red" } : { color: "transparent" }}>
						Не все поля заполненны
					</p>
					<Button
						onClick={() => {
							let temp = false;
							Object.keys(model).map((key) => {
								if (!Boolean(newObject[key])) {
									temp = true;
								}
							});
							setStopper(temp);
							if (temp) return;
							objects.push(newObject);
							setObjects(objects);
							setIsCreateModalOpen(false);
						}}
						innerText={
							config.saveButtonImg ? (
								<img src={config.saveButtonImg} />
							) : (
								config.saveButtonText
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default _CreateModal;
