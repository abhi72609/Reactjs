// Leacture :- #31 [    Lifting State Up in React   ]

import { useState } from "react"

// Parent State
export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return(
        <>  
            <p>Lifting State Up</p>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue}/>
        </>
    )
}


// Child State
const InputComponent = ({ inputValue, setInputValue }) => {
    return(
        <>
            <input 
            type="text" 
            placeholder="Enter Your Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return <p>The current Value For Display Component: {inputValue}</p>
}