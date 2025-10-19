import { useState } from "react";
import { Button, TableModalField } from "../../..";
import { randomKey } from "../../../lib/utils";
import config from "../../../config";

function _EditModal({
	setIsModalOpen,
	editTarget,
	objects,
	setObjects,
	columnNames,
	model,
}) {
	const [object, setObject] = useState(objects[editTarget]);
	const [stopper, setStopper] = useState(false);
	function objectSetter(key, newValue) {
		const model = object;
		model[key] = newValue;
		setObject(model);
	}
	return (
		<div
			className={"smart-table-edit-modal-bg"}
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
			<div className="smart-table-edit-modal" style={{ ...config.tableModal }}>
				<div
					className="smart-table-edit-modal-header"
					style={config.tableModalHeader}
				>
					<Button
						onClick={setIsModalOpen}
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
					{Object.keys(object).map((key, index) => {
						return (
							<TableModalField
								key={randomKey()}
								param={columnNames[index]}
								type={Array.isArray(model[key]) ? "array" : model[key]}
								options={Array.isArray(model[key]) ? model[key] : null}
								valueState={[
									object[key],
									(newValue) => objectSetter(key, newValue),
								]}
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
								if (!Boolean(object[key])) {
									temp = true;
								}
							});
							setStopper(temp);
							if (temp) return;
							objects[editTarget] = object;
							setObjects(objects);
							setIsModalOpen(false);
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

export default _EditModal;
