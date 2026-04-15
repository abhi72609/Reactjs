// Lecture :- #29   [   React JS State Challenge: Master useState with Objects - Test Your Skills 🧑‍💻    ] 
//  const user = [
//     {name:"Abhi",age:25},
//     {name:"Riya",age:24},
//     {name:"Toxic",age:45},
//     {name:"Ranveer",age:35}
// ]
// import { useState } from "react"

// export const DerivedState = () => {

//     const [user,setUser] = useState([
//     {name:"Abhi",age:25},
//     {name:"Riya",age:24},
//     {name:"Toxic",age:45},
//     {name:"Ranveer",age:35},
//     {name:"Divya",age:25}
// ])
//     return(
//         <div className="main-div">
//             <h1>USER LISTS</h1>
//             <ul>
//                 {user.map((currElem, index) => {
//                     return(
//                         <li key={index}>
//                             {currElem.name} - {currElem.age} Years Old
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     )
// }


// Lecture :- #30   [   Derived State in Reactjs    ] 
import { useState } from "react"

export const DerivedState = () => {

    const [user,setUser] = useState([
    {name:"Abhi",age:25},
    {name:"Riya",age:24},
    {name:"Toxic",age:45},
    {name:"Ranveer",age:35},
    {name:"Divya",age:25}
])

const userCount = user.length;
const avergeAge = user.reduce((accum,currElem) => accum + currElem.age, 0) / userCount;

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
            <p>Total Users : {userCount}</p>
            <p>Average Age : {avergeAge}</p>
        </div>
    )
}