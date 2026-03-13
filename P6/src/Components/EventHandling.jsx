export const EventHandling = () => {
    // Traditional Way
    // function handleButtonClick(){
    //     alert("Button got Clicked Event handling is working");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        alert("Button got Clicked Event handling is working");
    }
    return(
        <>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    );
};