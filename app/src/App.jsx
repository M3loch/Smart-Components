import { useState } from "react";
import "./App.css";
import {
	Select,
	CheckBox,
	Textarea,
	Input,
	Button,
	CopyText,
	Table,
} from "../../SmartComponents";

function App() {
	const InputState = useState("");
	const [optionState, setOptionState] = useState("");
	const listState = useState(["1", "2", "3"]);
	const objectState = useState({
		l1_1: 11,
		l1_2: 12,
		l1_3: {
			l2_1: 21,
			l2_2: 22,
			l2_3: {
				l3_1: 31,
				l3_2: false,
			},
		},
	});
	const checked1 = useState(false);
	const checked2 = useState(false);
	const [value, setValue] = useState("");
	const [objects, setObjects] = useState([
		{ name: "qwe", surname: "ewq", phone: 123, sex: "м" },
		{ name: "asd", surname: "dsa", phone: 456, sex: "м" },
	]);

	function setObjectsWrapper(newObjectList) {
		//
		// database fetching for example
		// or data formatting for another usage
		//
		setObjects(newObjectList);
	}

	return (
		<>
			{JSON.stringify(optionState)}
			<Select
				options={[1, 2, 3]}
				setOption={setOptionState}
				selectorName="option"
				label={"select"}
			/>
			<Input state={InputState} label={"input"} type="number" max={10} />
			<CheckBox
				checked={checked1}
				listState={listState}
				target={"2"}
				label={"list toggler"}
			/>
			{JSON.stringify(listState[0])}
			<CheckBox
				checked={checked2}
				objectState={objectState}
				path={["l1_3", "l2_3", "l3_2"]}
				label={"object toggler"}
			/>
			{JSON.stringify(objectState[0])}
			<Textarea
				state={useState("")}
				placeholder={"text area"}
				label={"textArea"}
			/>
			{value}
			<Button innerText={"Button"} value={"value setted"} onClick={setValue} />
			<CopyText value={"text to copy"} />
			<Table
				tableName={"table"}
				isCollapsable={true}
				columnNames={["имя", "фамилия", "номер", "пол"]}
				objects={objects}
				setObjects={setObjectsWrapper}
				values={["name", "surname", "phone", "sex"]}
				editable={true}
				isDraggable={true}
				model={{
					name: "string",
					surname: "string",
					phone: "number",
					sex: ["м", "ж"],
				}}
			/>
		</>
	);
}

export default App;
