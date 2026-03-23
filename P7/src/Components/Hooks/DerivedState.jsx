// Lecture :- #29   [   React JS State Challenge: Master useState with Objects - Test Your Skills 🧑‍💻    ] 
//  const user = [
//     {name:"Abhi",age:25},
//     {name:"Riya",age:24},
//     {name:"Toxic",age:45},
//     {name:"Ranveer",age:35}
// ]
import { useState } from "react"

export const DerivedState = () => {

    const [user,setUser] = useState([
    {name:"Abhi",age:25},
    {name:"Riya",age:24},
    {name:"Toxic",age:45},
    {name:"Ranveer",age:35}
])
    return(
        <div className="main-div">
            <h1>USER LISTS</h1>
            <ul>
                {user.map((currElem, index) => {
                    return(
                        <li key={index}>
                            {currElem.name} - {currElem.age} Years Old
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}