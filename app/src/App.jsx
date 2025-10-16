import { useState } from "react";
import {
	Select,
	CheckBox,
	Textarea,
	Input,
	Button,
	CopyText,
	Table,
	Field,
	List,
} from "../../SmartComponents";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [optionState, setOptionState] = useState("");
	const [list, setList] = useState(["1", "2", "3"]);
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
	const [fieldValue, setFieldValue] = useState("value");
	const [textAreaValue, setTextAreaValue] = useState("");
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
			<Input
				value={inputValue}
				setValue={setInputValue}
				label={"input"}
				type="number"
				max={10}
			/>
			<CheckBox
				list={list}
				setList={setList}
				target={"2"}
				label={"list toggler"}
			/>
			{list.toString()}
			<CheckBox
				object={objectState[0]}
				setObject={objectState[1]}
				path={["l1_3", "l2_3", "l3_2"]}
				label={"object toggler"}
			/>
			{JSON.stringify(objectState[0])}
			<Textarea
				value={textAreaValue}
				setValue={setTextAreaValue}
				placeholder={"text area"}
				label={"textArea"}
			/>
			{value}
			<Button innerText={"Button"} value={"value setted"} onClick={setValue} />
			<CopyText value={"text to copy"} />
			{/* <Table
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
				width="700px"
			/> */}
			<Field
				value={fieldValue}
				setValue={setFieldValue}
				placeholder={"field placeholder"}
				editable={true}
				width="200px"
			/>

			{/* <List
				list={listState[0]}
				setList={listState[1]}
				isCollapsable={true}
				listName={"list"}
				width="200px"
			/> */}
		</>
	);
}

export default App;
