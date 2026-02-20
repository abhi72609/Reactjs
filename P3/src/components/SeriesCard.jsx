// Lecture - #13 Props in React.js
// export const SeriesCard = (props) => {
//     console.log(props);
//     return(
//         <li key={props}>
//             <div>
//                 <img src={props.currElement.img_url} height="40%" width="40%"/>
//             </div>
//             <h2>Name : {props.currElement.name}</h2>
//             <h3>Rating : {props.currElement.rating}</h3>
//             <p>Summary : {props.currElement.description}</p>
//             <p>Genre : {props.currElement.genre}</p>
//             <p>Cast : {props.currElement.cast}</p>
//         </li>
//     )
// }


// Lecture - #14 Destructuring in React.js
// First Way-
// export const SeriesCard = (props) => {
//     const {img_url,name,rating,description,genre,cast} = props.currElement;
//     return(
//         <li key={props}>
//             <div>
//                 <img src={img_url} height="40%" width="40%"/>
//             </div>
//             <h2>Name : {name}</h2>
//             <h3>Rating : {rating}</h3>
//             <p>Summary : {description}</p>
//             <p>Genre : {genre}</p>
//             <p>Cast : {cast}</p>
//         </li>
//     )
// }


// Second Way - of Destructuring
export const SeriesCard = ({currElement}) => {
    const {img_url,name,rating,description,genre,cast} = currElement;
    return(
        <li>
            <div>
                <img src={img_url} height="40%" width="40%"/>
            </div>
            <h2>Name : {name}</h2>
            <h3>Rating : {rating}</h3>
            <p>Summary : {description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
        </li>
    )
}
