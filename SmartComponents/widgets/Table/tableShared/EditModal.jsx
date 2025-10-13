import { useState } from "react";
import { Button, TableModalField } from "../../..";
import { randomKey } from "../../../lib/utils";
import close from "../../../assets/close.svg";

function _EditModal({
	setIsModalOpen,
	editTarget,
	objects,
	setObjects,
	className,
	modalBackground,
	columnNames,
	model,
	saveButtonText,
	closeSrc,
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
					onClick={setIsModalOpen}
					value={false}
					innerText={<img src={closeSrc ? closeSrc : close} />}
				/>
			</div>
			<div className="smart-table-edit-modal">
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
						setObjects((prev) => {
							prev[editTarget] = object;
							return prev;
						});
						setIsModalOpen(false);
					}}
					innerText={saveButtonText}
				/>
			</div>
		</div>
	);
}

export default _EditModal;
