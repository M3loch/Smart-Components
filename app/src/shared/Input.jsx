

function Input({
        state,
        style = {},
        type = 'text',
        min = null,
        max = null,
        placeholder,
        className,
        sideEffect

    }){
        const [value, setValue] = state

        type == 'text' && min < 0
            ? min = 0
            : null

        if (min != null && typeof(min) != 'number'){
            console.error('min property should be valid integer')
            min = null
        }
        if (max != null && typeof(max) != 'number'){
            console.error('"max" property should be valid integer')
            max = null
        }


        function onChange(event){
            const val = event.target.value 

            if (type == 'number' && isNaN(val)){
                return
            }

            if (max != null){
                if (type == 'number' && Number(val) > max){
                    setValue(max)
                } else if(type == 'text' && val.length > max){
                    return
                }
            }
            if (min != null){
                if (type == 'number' && Number(val) < min){
                    setValue(min)
                }
            }

            switch(type){
                case 'number':
                    setValue(Number(val))
                    break;
                default: setValue(val)
            }
            sideEffect && sideEffect(val)
        }

        return (
            <div className="smart-input-container smart-container">
                <input placeholder={placeholder} className={className} style={style} value={value}  onChange={onChange} />
            </div>
        )
}

export default Input