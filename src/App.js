//import logo from './logo.svg';
import './App.css';
import React from 'react'; //I imported this in here...
//import Moment from 'react-moment';
import * as moment from 'moment';



// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Link = ReactRouterDOM.Link;
// const Prompt = ReactRouterDOM.Prompt;
// const Switch = ReactRouterDOM.Switch;
// const Redirect = ReactRouterDOM.Redirect; 

// function Button() {
//   return (
//     <div>
//         Hi
//         <form>
//             Username:
//             <input value={""} type="text"></input>
//             Password
//             <input value={""}  type="text"></input>
//             <button>Submit</button>
//         </form>
//     </div>
// )
// };

function SetTime() {
// eslint-disable-next-line
  const [time, setTime ] = React.useState('');
// eslint-disable-next-line
  function handleTime(evt) {
    evt.preventDefault();
    console.log(time);
    alert('you submitted the form');

    // Once I get the time, then make a countdown
    function countDown() {
      console.log(time)
      
      alert('This is the moment.js now time alert')
      let nowTime = moment()
      nowTime = moment(nowTime).format("hh:mm");
      console.log(nowTime); //Getting current time from moment.js -> '12:35'
      alert('This is the second alert')
      // return console.log(time)

      //Now subtract the chosen user time from the selected time to get a total hours and min
      let startTime = moment.duration(time, "HH:mm");
      console.log(startTime);

      let endTime = moment.duration(nowTime, "HH:mm");
      console.log(endTime);
      // const endTime = moment.duration()
      let timeDifference = endTime.subtract(startTime);
      console.log(timeDifference); //return a dict obj

      timeDifference.hours();
      console.log(timeDifference.hours()) //display the hours
      console.log(typeof timeDifference.hours())

      timeDifference.minutes();
      console.log(timeDifference.minutes()); //display the minutes

      
    }
    countDown()
    
  }

  function handleTimeChange(evt) {
    setTime(evt.target.value)
  }


  

  return (
    <div>
        <form onSubmit={handleTime}>
            Start Time:
            {/* Will accept time between 12AM to 12PM */}
            <input value={time} onChange = {handleTimeChange} type="time" min="24:00" max="24:00"></input> 
            
            <button>Submit</button>
        </form>
    </div>
)};



function App() {
  return (
    <div> Hello World
      {/* <Button /> */}
      <SetTime />
   
    </div>
  );
}

export default App;
