// all of the img imports
import _edit from "../assets/edit.svg";
import _delete from "../assets/delete.svg";
import _close from "../assets/close.svg";

const config = {
	saveButtonText: "save",
	saveButtonImg: null,
	createButtonText: "Добавить",
	careateButtonImg: null,

	editButtonText: null,
	deleteButtonText: null,
	closeButtonText: null,
	editButtonImg: _edit,
	deleteButtonImg: _delete,
	closeButtonImg: _close,

	modalBackground: "#00000090",

	buttonConfig: {
		background: "#242424ff",
		color: "white",
		padding: "5px",
		cursor: "pointer",
		border: "none",
		boxSizing: "border-box",
	},
	buttonHoverConfig: {
		background: "#2e2e2eff",
		color: "white",
		padding: "5px",
		border: "none",
		cursor: "pointer",
	},
	buttonActiveConfig: {
		background: "#474747ff",
		color: "white",
		padding: "5px",
		border: "none",
		cursor: "pointer",
	},

	copyText: { margin: "0" },

	copyTextContainer: {
		position: "relative",
		margin: "10px",
	},

	copyTextConfig: {
		popUpText: "Copied",
		tooltipText: "Copy",
	},
	copyTextPopup: {
		transition: "200ms",
		padding: "3px",
		width: "fit-content",
		color: "#0dff0dff",
		padding: "5px",
		background: "#00000099",
		borderRadius: "5px",
		right: "-200px",
		top: 0,
	},
	copyTextToolTip: {
		width: "fit-content",
		padding: "3px",
		left: "0",
		top: "-20px",
		color: "white",
		transition: "200ms",
		background: "#00000099",
		borderRadius: "5px",
	},

	input: {},
	inputLabel: {},
	inputContainer: {},

	checkbox: {},
	checkboxLabel: {},
	checkboxContainer: {},

	textarea: {},
	textareaLabel: {},
	textareaContainer: {},

	fieldLabel: {
		padding: 0,
		margin: 0,
		position: "absolute",
		right: "20px",
		bottom: "10px",
	},
	fieldValue: { padding: 0, margin: 0, marginLeft: "18px", marginTop: "10px" },
	fieldValueContainer: { padding: "10px" },
	field: {
		height: "90px",
		background: "#fbfbfb",
		borderRadius: " 16px",
		paddingLeft: "10px",
		position: "relative",
		marginBottom: "20px",
	},
	fieldSaveBottom: {
		padding: 0,
		margin: 0,
		position: "absolute",
		right: "20px",
		top: "10px",
		height: "40px",
		width: "100px",
	},
	fieldInput: { height: "5px" },
	fieldInputContainer: { display: "flex" },
	fieldInputIncorrect: { border: "solid red 1px" },

	table: {
		marginTop: "20px",
	},

	tableHeaderOpened: {
		borderRadius: "20px 20px 0 0",
		background: "#828282",
		color: "#ffffff",
	},
	tableHeaderCollapsed: {
		borderRadius: "20px",
		background: "#828282",
		color: "#ffffff",
	},
	tableName: {
		fontWeight: "500",
	},

	tableLabel: {
		background: "#e0e0e0",
		height: "50px",
	},
	tableRowNumber: {
		background: "#fbfbfb",
	},
	tableRowControls: {
		background: "#e0e0e0",
	},
	tableRowValue: {
		background: "#f0f0f0ff",
	},
	tableModal: {
		width: "300px",
		display: "flex",
		flexDirection: "column",
		background: "#474747ff",
		borderRadius: "4px",
		padding: "10px",
	},
	tableModalHeader: {
		display: "flex",
		boxSizing: "border-box",
		width: "100%",
		justifyContent: "right",
	},
	tableModalBody: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	tableCreateButtonContainer: { padding: "5px", background: "#e0e0e0" },

	listHeaderCollapsed: {
		borderRadius: "20px",
		color: "#ffffff",
		background: "#828282",
	},
	listHeaderOpened: {
		borderRadius: "20px 20px 0 0",
		color: "#ffffff",
		background: "#828282",
	},
	listValue: {
		diplay: "flex",
		alignItems: "center",
		padding: "10px 10px 10px 30px",
		background: "#f0f0f0ff",
		flex: 1,

		height: "30px",
		margin: "0",
	},

	listRowControls: {
		background: "#c7c7c7ff",
		maxWidth: "90px",
	},
	listControlsButton: { padding: "5px", margin: "5px 0" },

	createListElement: { padding: "5px", background: "#c7c7c7ff" },
};

export default config;
