import { Button, ListControls } from "../../..";
import { randomKey } from "../../../lib/utils";

function _ListBody({ list, setList, setEditListModal, setNewElementModal }) {
	const _bodyStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const _elemStyle = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		width: "100%",
	};
	return (
		<div className="list-body" style={_bodyStyle}>
			{list.map((elem) => (
				<div
					className="smart-list-element"
					key={randomKey()}
					style={_elemStyle}
				>
					{elem}
					<ListControls
						target={elem}
						setList={setList}
						setEditListModal={setEditListModal}
					/>
				</div>
			))}
			<div className="create-new-element" style={{ width: "100%" }}>
				<Button
					innerText={"add"}
					onClick={setNewElementModal}
					value={true}
					style={{ width: "100%" }}
				/>
			</div>
		</div>
	);
}
export default _ListBody;
