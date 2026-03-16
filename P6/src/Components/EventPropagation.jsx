// Lecture :- 25: Event Propagation in React: Capturing, Bubbling, and Practical Implementation
import "./EV.css"
export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent clicked");
    };

    const handleParentClick = () => {
        console.log("Parent clicked");
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Clicked");
    };

    return(
        // This is Bubbling Phase
        // <section className="main-div">
        //     <div className="g-div" onClick={handleGrandParent}>
        //         <div className="p-div" onClick={handleParentClick}>
        //             <button className="c-div" onClick={handleChildClick}>
        //                 Child Div
        //             </button>
        //         </div>
        //     </div> 
        // </section>


        // For Capturing Phase instead of -> onClick we write  -> onClickCapture
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div> 
        </section>
    )
}