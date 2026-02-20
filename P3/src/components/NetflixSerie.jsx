import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";
const NetflixSerie = () => {
  return (
    <ul>
      {seriesData.map((currElement)=>(
        <SeriesCard  key = {currElement.id} currElement={currElement} />
        ))}
    </ul>
  );
};

export default NetflixSerie;




// const NetflixSerie = () => {// netflixSerie this is wrong way to write bcs it conside it as a function (first letter was small)
//   const Name = "GOT";
//   const Rating = 9.4;
// // Leacture - #9

// const WatchOtt = () => {
// //First way of Implementing Conditional Values but it violates rule (Do not Repeat Yourself)
//   let age = 17
//   if(age < 18){
//     return(
//     <button>Age Limit Restriction</button>
//     )
//   }

//   if(age >= 18){
//     return(
//       <button>You can Watch</button>
//     )
//   }
// }


// //Second way of Implementing Conditional Values using ternary Opreators
// const WatchOtt1 = () => {
//   let age = 19
//   return (
//     <button>{age >= 18 ? "Watch Ott" : "Age Limit Restriction"}</button>
//   )
// }


// //Third way of Implementing Conditional Values using variables/condition operator
// const WatchOtt2 = () => {
//   let age = 2

//   let canWatch = "Below Age"
//   if(age >= 18) canWatch = "You can Watch"

//   return(
//     <button>{canWatch}</button>
//   )
// }

// //Fourth way solution can be better as it prevents cluttering of variable outside and encapsulates such logic inside a function.
// // One another benfit is also that, you can also pass some dynamic values as function parameter
// const WatchOtt3 = () => {
//   let age = 18
//   const canWatch = () => {
//     if(age >= 18) return "Watch Now"
//     return "Below Age"
//   }

//   return(
//     <button>{canWatch()}</button>
//   )
// }

//   return(
//     <div>
//       <h1>Name : {Name}</h1>
//       <h2>Rating : 9.5</h2>
//     </div>
//   )
  
// };



// export default NetflixSerie;