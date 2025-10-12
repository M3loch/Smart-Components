import { Button } from "../../..";
import close from "../../../assets/close.svg";

function _CreateModal({
	setIsCreateModalOpen,
	modalBackground,
	className = "",
	closeSrc,
}) {
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
		</div>
	);
}

export default _CreateModal;
