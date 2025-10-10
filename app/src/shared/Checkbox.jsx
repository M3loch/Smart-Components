function CheckBox({
    state,
    label,
    values = [true, false],
    listState = null,
    target = null,
    objectState = null

    
    }) {
    
        const [value, setValue] = state
        function changeEvent() {
            // if 'values' prop - default, than value will be changing between true or false, else it will be changing between two passed params in 'values' array
            setValue(prev => values.filter((elem) => {return elem !== prev})[0])

            // checkbox can control whether has 'list' 'target' object or hasn't 
            if (listState != null && target != null){
                const [list, setList] = listState;
                list.includes(target)
                    ? setList(prev => prev.filter((elem) => {return elem !== target}))
                    : setList(prev => prev.push(target))
            }

            // check box can control object's values
            if (objectState != null){
                const [object, setObject] = objectState


            }
        }

        return (
            <div className="smart-checkbox-container smart-container">
                {
                    label && 
                    <div className="smart-checkbox-label-container">
                        {label}
                    </div>
                }
                <input 
                    type='checkbox' 
                    checked={value}
                    value={value} 
                    onChange={changeEvent} 
                />
            </div>
        )
}

export default CheckBox