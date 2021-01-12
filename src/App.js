//import logo from './logo.svg';
import './App.css';
import React from 'react'; //I imported this in here...
//import Moment from 'react-moment';
import * as moment from 'moment';
//=======================================================

function AddTodo() {

  const [todoTitle, setTitle] = React.useState("");
  // const[todoDetail, setDetail] = React.useState("");

  
  function handleTodo(evt) {
    evt.preventDefault();
    console.log(todoTitle);
    // console.log(todoDetail);
    alert('you submitted Todo item')

    // const displayTitle = document.querySelector('#todo-title').textContent = todoTitle 
    // const displayDetails = document.querySelector('#todo-detail').textContent = todoDetail
    

    const todoTitleList = [];  
    todoTitleList.push(todoTitle);
    //console.log(todoList);

    //NOTE: Create a new element and append the todoTitle and todoDetails. 

    const deleteTodo = () => {
      elementTitle.classList.remove(elementTitle)
      alert( 'deleted todo item')
    }

    let elementTitle = document.createElement("p");
    let elementTitleDeleteButton = document.createElement("button");

    document.querySelector("#todo-title").appendChild(elementTitle).textContent = todoTitleList ;
    
    //Add Delete button each time new task is added
    
    //NOTE: Finally, the button gets appended to EACH "p". Use the variable name, NOT "document.queryselector("p") which creates multiple "p", but duplicated buttons inside one "p" tag
    elementTitle.appendChild(elementTitleDeleteButton).textContent = "Delete" ;
    
    elementTitleDeleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      alert('You clicekd me');
      elementTitle.remove();
    });
    // const deleteTodo = () => {
    //   elementTitle.classList.remove("p")
    // }

    //When the user clicks on delete button, the DOM task element gets removed 
    // function deleteTodo() {
    //   document.querySelector("button").addEventListener("click", ()) => {
    //     alert('delete me!')
    //   }
    }



  


  function handleTodoTitleChange(evt) {
    setTitle(evt.target.value);
   
    
  }

  // function handleTodoDetailChange(evt) {
  //   setDetail(evt.target.value);

  // }

  return (
    <div>
      
        <form onSubmit = {handleTodo}>
            Todo:
            <input value={todoTitle} onChange = {handleTodoTitleChange} type="text"></input>
            <button>Add Item</button>
            <br></br>
            {/* Additional Details:
            <input value={todoDetail} onChange = {handleTodoDetailChange} type="text"></input> */}
            {/* <br></br> */}
            
        </form>
        
        <form>
          <div id = "todo-title">

          
          </div>
        </form>

        {/* <div id = "todo-detail">

        </div> */}
        <div>


        </div>
    </div>
)
}




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

//NOTE: Time at 1:10AM and 12:52PM yields negative time results!!! So i prob need to factor in military time potentially for AM vs PM...

// function SetTime() {
// // eslint-disable-next-line
//   const [time, setTime ] = React.useState('');
// // eslint-disable-next-line
//   function handleTime(evt) {
//     evt.preventDefault();
//     console.log(time);
//     alert('you submitted the form');

    // Once I get the time, then make a countdown
    // function countDown() {
    //   console.log(time)
      
    //   alert('This is the moment.js now time alert')
    //   let nowTime = moment()
    //   nowTime = moment(nowTime).format("hh:mm");
    //   console.log(nowTime); //Getting current time from moment.js -> '12:35'
    //   alert('This is the second alert')
    //   // return console.log(time)

    //   //Now subtract the chosen user time from the selected time to get a total hours and min
    //   let startTime = moment.duration(time, "HH:mm");
    //   console.log(startTime);

    //   let endTime = moment.duration(nowTime, "HH:mm");
    //   console.log(endTime);
    //   // const endTime = moment.duration()
    //   let timeDifference = endTime.subtract(startTime);
    //   console.log(timeDifference); //return a dict obj

    //   timeDifference.hours();
    //   console.log(timeDifference.hours()) //display the hours
    //   console.log(typeof timeDifference.hours()) //Data type is a Number!! 

    //   timeDifference.minutes();
    //   console.log(timeDifference.minutes()); //display the minutes

    //   //Now start the count down passing in the hours and minutes

    //   //First put the hours and minutes display on the frontend html
    //   const inputTime = document.querySelector('#countdown').textContent = timeDifference.hours() + ":" + timeDifference.minutes()

    //   //Then get the time that we just put in the html
    //   const timeCount = document.getElementById('countdown');


      // countdown code starts here
      // function updateCountDown () {
      //   const currentTimeNow = moment(); 
      //   const formatTimeHoursMinutes = currentTimeNow.format('hh:mm');

      //   timeCount.textContent = formatTimeHoursMinutes;
      // }

      // setInterval(updateCountDown, 1000);







      // let duration = moment.duration({
      //   //'days': 1,
      //   'hours': timeDifference.hours(), //0, //res.hours,
      //   'minutes': timeDifference.minutes(),
      //   // 'seconds': 00

      // });

      // let timestamp = new Date(0, 0, 0, 0, 0, 0); //hr, min, sec for last three numbers.
      // let interval = 1; //dictates speed of the countdown. At 2, it'll countdown faster
      // let timer = setInterval(function() {
      //   timestamp = new Date(timestamp.getTime() + interval * 1000); //multiply by 1000 to correct for epoch time

      //   duration = moment.duration(duration.asSeconds() - interval, 'seconds'); //so at 59 seconds and interval at 1, it'll count down to 58, 57, etc.
      //   let hour = duration.hours(); //defining the variable at hours
      //   let min = duration.minutes();
      //   let sec = duration.seconds();

      //   console.log(duration)

      //   //This is where the countdown is executed
        
      //   sec -= 1; 
      //   if (min < 0) return clearInterval(timer);
      //   if (min < 10 && min.length != 2) min = '0' + min;
      //   //Nested if Statement below
      //   if (sec < 0 && min != 0 && hour == 0) {
      //     //hour -= 1;
      //     //min -= 1;
      //     sec = 59;
      //     if (min != 0){
      //     min -= 1;
      //     } 
      //     if (hour != 0) {
      //     hour -= 1;
      //     }
      //   } else if (sec < 10 && sec.length != 2) sec = '0' + sec;

      //   //USE VANILLA JS, instead of Jquery below

      //   let x = document.querySelector('.countdown').textContent = "hour + ':' + min";
      //   console.log("hi")
        
        

      //   // $('.countdown').text(hour + ':' + min + ':' + sec);
      //   if (hour == 0 && min == 0 && sec == 0)
      //     clearInterval(timer);
      //     // $.get("/countdown-timer-message-twilio"), (res) => {
      //     //   console.log(res)
      //     // };
          
      //     //$('#alarm-alarm').prepend('href="/countdown-text/{{alarm}}"');
      //     //document.getElementById("text-send").submit();
      //     //return "ALARM";


      // }, 1000);

//     }
//     countDown()
    
//   }

//   function handleTimeChange(evt) {
//     setTime(evt.target.value)
//   }


  

//   return (
//     <div>
//         <form onSubmit={handleTime}>
//             Start Time:
//             {/* Will accept time between 12AM to 12PM */}
//             <input value={time} onChange = {handleTimeChange} type="time" min="24:00" max="24:00"></input> 
            
//             <button>Submit</button>
//         </form>

//         <div id = "countdown"></div>
//     </div>
// )};



function App() {
  return (
    <div> 
      <AddTodo />
      
      {/* <Button /> */}
      {/* <SetTime /> */}
   
    </div>
  );
}

export default App;
