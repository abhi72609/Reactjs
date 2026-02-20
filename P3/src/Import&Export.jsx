const Import = () => {
    return (
        <div>
            <h1>Default Import and Export</h1>
            <p>In Default import and export we have to write a statement after code that is export default nameOfComponent / filex</p>
        </div>
    )
};

export default Import;


export const Export = () => {
    return (
        <div>
            <h1>Name Import and Export</h1>
             <p>In name export Name is very Important therefor in App.jsx file we have to write the name inside the curly braces like :-     {/*        import {Export} from "./Import&Export.      */}
            Also Name should import and export file name should match"</p>
        </div>
    )
}


//      NOTE :- there can me Multiple Name Export in a file but there can be only one Default export 

export const Export1 = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}