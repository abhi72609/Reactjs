// Lecture :- #26 [React States: What is useState Hook & Why we need it in React] 
// import { useState } from "react";

// export const State = () => {
//     const [count, setCount] = useState(0);
//     const handleButtonClick = () => {
//         setCount(() => count + 1);
//     };
    
//     return(
//     <>
//         <section className="main-div">
//             <h1>{count}</h1>
//             <button onClick={handleButtonClick}>Increment</button>
//         </section>
//     </>
//     );
// };


//  Lecture :- #27 [    How React State Works: In-depth Guide with Theory, Animation, and Practical Examples    ]

import { Children, useState } from "react";
export const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
    };
    
    return(
    <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </div>
        <ChildComp />
    </>
    );
};