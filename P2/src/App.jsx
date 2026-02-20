// Using Normal Way
// import React from "react";

// export const App = () => {
//   return (
//     <React.Fragment>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </React.Fragment>
//   );
// };


// Using Fragment
import {Fragment} from "react";

export const App = () => {
  return (
    <Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </Fragment>
  );
};


const NetflixSeries = () => { //NetflixSeries it is Component not a function (bcz it'a in Pascal Case)
  const name = "breaking bad" 
  const rating = 8.9 
  const summary = "A mild-mannered chemistry teacher turns into a ruthless drug kingpin after a cancer diagnosis, as power and pride slowly destroy everything he loves."
  const returnGenre = () => {
    const Genre = "Romatic- Comedy"
    return Genre
  }
  return (
    <div>
      <div>
        <img src="breaking-bad-card.jpg" alt="OOPS PIC NOT FOUND" width="50%" height="50%"/>
      </div>
      {/* // Dynamic value using Variable */}
      <h1>Name: {name}</h1>

      {/* // Dynamic value using Expressions */}
      <h2>Rating: {5 + 3.8}</h2>

      <p>Breaking Bad :  {summary}</p>

      {/* // Dynamic Value Using Function */}
      <p>Genre : {returnGenre()} </p>
    </div>
  );
};