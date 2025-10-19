import { Button, ListControls } from "../../..";
import config from "../../../config";
import { randomKey } from "../../../lib/utils";

function _ListBody({
	list,
	setList,
	setEditListModal,
	setNewElementModal,
	editable,
	setEditTarget,
}) {
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
			{list.map((elem, index) => (
				<div
					className="smart-list-element"
					key={randomKey()}
					style={_elemStyle}
				>
					<p className="list-value" style={config.listValue}>
						{elem}
					</p>
					{editable && (
						<ListControls
							target={elem}
							list={list}
							setList={setList}
							setEditListModal={setEditListModal}
							setEditTarget={setEditTarget}
						/>
					)}
				</div>
			))}
			{editable && (
				<div
					className="create-new-element"
					style={{
						width: "100%",
						boxSizing: "border-box",
						...config.createListElement,
					}}
				>
					<Button
						innerText={"add"}
						onClick={setNewElementModal}
						value={true}
						style={{ padding: "5px", margin: " 5px 0" }}
					/>
				</div>
			)}
		</div>
	);
}
export default _ListBody;
