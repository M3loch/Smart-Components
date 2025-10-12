function _CheckBox({
	label,
	options = [true, false],
	listState = null,
	target = null,
	objectState = null,
	path = null,
	checked,
	className = "",
	sideEffect,
}) {
	const [checkedState, setChecked] = checked;

	function toggleChecked() {
		if (typeof checkedState != "boolean") {
			return;
		}
		setChecked((prev) => !prev);
		sideEffect && sideEffect();
	}

	function changeEvent() {
		if (
			listState == null &&
			objectState == null &&
			target == null &&
			path == null
		) {
			// if 'options' prop - default, than value will be changing between true or false, else it will be changing between two passed params in 'options' array
			toggleChecked();
		}
		if (listState != null && target != null) {
			// if listState is passed and target value is passed checkbox can toggle wether has 'list' 'targer' or hasn't
			const [list, setList] = listState;
			if (list.includes(target)) {
				setList((prev) => {
					return prev.filter((elem) => {
						return elem != target;
					});
				});
			} else {
				list.push(target);
				setList(list);
			}
			toggleChecked();
		}
		if (objectState != null && path != null) {
			// if objectState and path to target value is passed checkbox can toggle object's target value between 'options'
			function updateNestedValue(obj, path, newValue) {
				if (path.length === 0) return newValue;
				const [key, ...rest] = path;
				return {
					...obj,
					[key]: updateNestedValue(obj[key], rest, newValue),
				};
			}
			const [object, setObject] = objectState;
			const currentValue = path.reduce((acc, key) => acc?.[key], object);
			const newValue = currentValue === options[0] ? options[1] : options[0];
			setObject(updateNestedValue(object, path, newValue));
			toggleChecked();
		}
	}
	return (
		<div className={`smart-checkbox-container smart-container`}>
			{label && <div className="smart-checkbox-label">{label}</div>}
			<input
				className={className}
				type="checkbox"
				checked={checkedState}
				value={checkedState}
				onChange={changeEvent}
			/>
		</div>
	);
}

export default _CheckBox;
