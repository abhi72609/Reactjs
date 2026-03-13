function JSXasProps (){
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name = "Abhi"
                age = {24}
                greeting = {
                    <div>
                        <strong>Hi Abhi, have a good day</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading, Playing Cricket</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard
                name = "Jayant"
                age = {23}
                greeting = {
                    <div>
                        <strong>Hi Jayant, have a good day</strong>
                    </div>
                }
            >
                <p>Hobbies : Painting, Playing Ludo</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default JSXasProps;



function ProfileCard(props) {
    return(
        <>
            <h2>Name : {props.name}</h2>
            <p>Age : {props.age}</p>
            <p>{props.greeting}</p>
            <div>{props.children}</div>
        </>
    );
}