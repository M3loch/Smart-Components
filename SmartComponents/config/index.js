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
	cornerRadius: "5px",

	headerColor: "#b3b3b3",
	labelsColor: "#c5c5c5",
	blockBackground: "#c5c5c5",

	textColor: "white",

	buttonConfig: {
		background: "#242424ff",
		color: "white",
		padding: "5px",
		margin: "5px",
		cursor: "pointer",
	},
	buttonHoverConfig: {
		background: "#2e2e2eff",
		color: "white",
		padding: "5px",
		margin: "5px",
		cursor: "pointer",
	},
	buttonActiveConfig: {
		background: "#474747ff",
		color: "white",
		padding: "5px",
		margin: "5px",
		cursor: "pointer",
	},

	CopyText: {},

	CopyTextPopup: {
		transition: "200ms",
		padding: "3px",
		position: "absolute",
	},
	CopyTextToolTip: {
		width: "fit-content",
		padding: "3px",
		position: "absolute",
		transition: "200ms",
	},
};

export default config;
