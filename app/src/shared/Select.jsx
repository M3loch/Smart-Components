function Select(
    { 
        selectorName, 
        style = {},
        options = [], 
        setOption,
        byIndex = false,
        className,
        sideEffect = null
     }){
    function selectHandler(event){
        let val = event.target.value
        !byIndex
        ?
            setOption(val)
        :      
            setOption(Number(val))   

        sideEffect && sideEffect(val)   
    }
    return (
        <div className="smart-select-container">
            <select className={className} style={style} onChange={selectHandler} defaultValue={selectorName}>
                <option disabled>{selectorName}</option>
                {options.map((value, index) => { return <option key={index} value={!byIndex ? value : index}>{value}</option>})}
            </select>
        </div>
    )
}

export default Select