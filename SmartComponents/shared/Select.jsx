function _Select({
	selectorName,
	label = null,
	style = {},
	options = [],
	setOption,
	byIndex = false,
	sideEffect = null,
	initValue = null,
}) {
	function selectHandler(event) {
		let val = event.target.value;
		!byIndex ? setOption(val) : setOption(Number(val));

		sideEffect && sideEffect(val);
	}
	return (
		<div className="smart-select-container">
			{label && <div className="smart-select-label">{label}</div>}

			<select
				style={style}
				onChange={selectHandler}
				defaultValue={initValue ? initValue : selectorName}
			>
				<option disabled>{selectorName}</option>
				{options.map((value, index) => {
					return (
						<option key={index} value={!byIndex ? value : index}>
							{value}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default _Select;
