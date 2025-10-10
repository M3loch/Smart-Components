import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './shared/Input'
import Select from './shared/Select'

function App() {
  const InputState = useState('')
  const [optionState, setOptionState] = useState('')
  

  return (
    <>
      <Select 
        options={[1, 2, 3]} 
        setOption={setOptionState} 
        selectorName="option" 
        sideEffect={console.log(optionState)}
      />
      <Input 
        state={InputState} 
        type='number' 
        max={10}
      />
    </>
  )
}

export default App