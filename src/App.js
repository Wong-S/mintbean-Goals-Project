//import logo from './logo.svg';
import './App.css';
import React from 'react'; //I imported this in here...
//import Moment from 'react-moment';
import * as moment from 'moment';
//=======================================================
//=======================================================
//GLOBAL VARIABLES:
const todoTitleList = [];  //Global variable...
//=======================================================
//=======================================================
//Goal Track App Tasks Start Here:


function AddTodo() {

  const [todoTitle, setTitle] = React.useState("");
  // const[todoDetail, setDetail] = React.useState("");


  // Trying to save the data when the page refreshes
  // ===========================================
  // React.useEffect(() => {
  //   window.localStorage.setItem('todoTitleList', todoTitleList), [todoTitleList];
  //   return { todoTitleList };
  // });
  // React.useEffect(() => {
  //   function checkTodoData() {
  //     const item = localStorage.getItem('todoTitle')
  
  //     if (item) {
  //       setTitle(item)
  //     }
  //   }
  
  //   window.addEventListener('storage', checkTodoData)
  
  //   return () => {
  //     window.removeEventListener('storage', checkTodoData)
  //   }
  // }, [])
  
  function handleTodo(evt) {
    evt.preventDefault();
    console.log(todoTitle);
    // console.log(todoDetail);
    alert('you submitted Todo item')

    // const displayTitle = document.querySelector('#todo-title').textContent = todoTitle 
    // const displayDetails = document.querySelector('#todo-detail').textContent = todoDetail
    

    // const todoTitleList = [];  
    todoTitleList.push(todoTitle);
    console.log(todoTitleList);

    //NOTE: Create a new element and append the todoTitle and todoDetails.

    let elementTitle = document.createElement("p");
    let elementTitleDeleteButton = document.createElement("button");  //Delete Button
    let elementTitleEditButton = document.createElement("button");  // Edit Button

    document.querySelector("#todo-title").appendChild(elementTitle).textContent = todoTitle;
    
    //Add Delete button each time new task is added
    
    //NOTE: Finally, the button gets appended to EACH "p". Use the variable name, NOT "document.queryselector("p") which creates multiple "p", but duplicated buttons inside one "p" tag
    elementTitle.appendChild(elementTitleDeleteButton).textContent = "Delete" ;
    elementTitle.appendChild(elementTitleEditButton).textContent = "Edit" ;
    
    //Delete Event Listener
  
    elementTitleDeleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      alert('Delete me');
      elementTitle.remove();
   

        // not sure why this conditional isn't working to update
        // the todoTitleList??

        for( let i = 0; i < todoTitleList.length; i++){ 
    
          if ( todoTitleList[i] === elementTitle) { 
             todoTitleList.splice(i, 1);
          }
      }
      });

    //NOTE: Edit functionality start here====================
    elementTitleEditButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      alert('Edit me');

      //Create another form for input. Take that input and replace the current DOM element inner text. 
      let elementForm = document.createElement("form");
      // elementForm.setAttribute("onSubmit", {handleEdit})
      // elementForm.setAttribute("onChange", {handleEditChange})

      let elementEditButton = document.createElement("button");
      
      let elementInput = document.createElement("input");
      elementInput.setAttribute("type", "text");
      elementInput.setAttribute("value", "");
      elementInput.setAttribute("id", "editText");

 
      //Creating another input and update button option for user
      elementTitle.appendChild(elementForm);
      elementForm.appendChild(elementInput);
      elementForm.appendChild(elementEditButton);
      
      elementEditButton.textContent = "Update Todo";

      // function editHandle (evt) {
      //   evt.preventDefault();
      //   console.log(edit);
      // }

      // function handleEditChange(evt) {
      //   const editbtn = evt.target.value;
      //   console.log(editbtn);
      // }
      
      //Event Listener for Element Edit Button
      elementForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        alert('update me?');
        let newEditText = document.getElementById("editText").value; //Gets the value from the input Id
        console.log(newEditText);

        //Now replace the newly inputed text by user into the todo

        //1: remove the update todo text box.
        elementForm.remove();

        //2: replace the old text with the new edit by inserted the value into the HTML DOM
        elementTitle.textContent = newEditText;
        elementTitle.appendChild(elementTitleDeleteButton).textContent = "Delete" ;
        elementTitle.appendChild(elementTitleEditButton).textContent = "Edit" ;
        
        console.log(todoTitleList)

      })
   
    });


    }

  function handleTodoTitleChange(evt) {
    setTitle(evt.target.value);
   
    
  }


  return (
    <div>
      
        <form onSubmit = {handleTodo}>
            Todo:
            <input value={todoTitle} onChange = {handleTodoTitleChange} type="text"></input>
            <button>Add Item</button>
            <br></br>

            
        </form>
        
        <form>
          <div id = "todo-title">

          
          </div>
        </form>

        <div>


        </div>
    </div>
)
}

///=========================================
///=========================================

//Search Functionality Starts Here:
function Search() {

  const [search, setSearch] = React.useState('');

  function handleSearch(evt) {
    evt.preventDefault();
    console.log(search);
    alert('Search activated');
  


  //Now, take the user's input and create a function to search for what they put in. Return results related/similar match
    function searchResultFeedback() {
      //1: create an empty array to hold the results to be later displayed
      const searchResults = []
    
      //2: Filter for the results and push/append to the array; use regex
      const hashtagSearch = /(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g 
      const searchString = search 

      //TESTING REGEX HERE BOOLEAN:
      const stringArray = searchString.match(hashtagSearch);
      console.log(stringArray)
      console.log('do they match?')


      //Split the user searched word into individual chars in a list:
      let stringArrayChar = []
      for (let i = 0; i < searchString.length; i ++ ) {
        stringArrayChar.push(searchString[i])
      }

      console.log('the new array of char is', stringArrayChar) // from "hi" to --> [#, h, i]

      const stringArrayCharLength = stringArrayChar.length;
      console.log('The array length is', stringArrayCharLength); // 3 (from example above)

    
      const finalSearchResults = []
      //if the searchString is in the todoTitleList then push those results in the searchResults list
      for (let i = 0; i < todoTitleList.length; i ++ ) {
        if (todoTitleList[i] === searchString) {
          searchResults.push(todoTitleList[i]);
        }
      }
    
      console.log('the length should be')
      console.log(searchResults);
      console.log(searchResults.length); //how many items in array

            //Now iterate and count the matches. If it's the same as the length, return the search result
      for (let i = 0; i < todoTitleList.length; i ++) {
        console.log('FOR LOOP');
        console.log(' FOR LOOP HERE', todoTitleList[i]); 
        let countMatch = 0

        for(let char in todoTitleList[i]) {
          console.log(todoTitleList[i][char]); //This is printing --> #, h, i ; each char of the word is getting iterated over
          let eachChar = todoTitleList[i][char]

          if (countMatch < stringArrayCharLength && stringArrayChar.includes(eachChar) === true ) {
            console.log('YES')
            countMatch ++

            //nested if statement:
            if (countMatch === stringArrayCharLength) {
              console.log('THE SEARCH RESULT IS')
              console.log(todoTitleList[i]);
              finalSearchResults.push(todoTitleList[i])
            }
          }

          else {
            console.log('no match found')
          }

        
        }

        // for(let char in i ) {
        //   console.log('the char is', char)
        // }
      }



      let searchResultLength = finalSearchResults.length;
    
      //now display searchResults back to user ; Add elements to form in DOM
      let elementForm = document.querySelector("#search-form");
    
      let elementDiv = document.createElement("div");
      elementDiv.classList.add("search-result");
    
      let elementButtonEdit = document.createElement("button");
      elementButtonEdit.setAttribute("id", "edit-btn");
    
      let elementButtonDelete = document.createElement("button");
      elementButtonDelete.setAttribute("id", "delete-btn");
    
      //Iterate through the searchResults.
      for (let i = 0; i < searchResultLength; i ++) {
        console.log(finalSearchResults[i]);
        console.log('for looop execute')

        //NOTE: Needed to create and assign a new variable eachtime. Cannot do it before or else only one div element gets created and shows up in the DOM
        let elementForm = document.querySelector("#search-form");
    
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("search-result");
      
        let elementButtonEdit = document.createElement("button");
        elementButtonEdit.setAttribute("id", "edit-btn");
      
        let elementButtonDelete = document.createElement("button");
        elementButtonDelete.setAttribute("id", "delete-btn");
      
        elementForm.appendChild(elementDiv).textContent = finalSearchResults[i]
        elementDiv.appendChild(elementButtonDelete).textContent = "Delete" ;
        elementDiv.appendChild(elementButtonEdit).textContent = "Edit" ;

        elementButtonDelete.addEventListener("click", (evt) => {
          evt.preventDefault();
          alert('Delete me');
          elementDiv.remove();
       
    
            // not sure why this conditional isn't working to update
            // the todoTitleList??
    
            // for( let i = 0; i < todoTitleList.length; i++){ 
        
            //   if ( todoTitleList[i] === elementTitle) { 
                //  todoTitleList.splice(i, 1);
            //   }
          
          });
    
        //NOTE: Edit functionality start here====================
        elementButtonEdit.addEventListener("click", (evt) => {
          evt.preventDefault();
          alert('Edit me');
    
          //Create another form for input. Take that input and replace the current DOM element inner text. 
          let elementForm = document.createElement("form");
          // elementForm.setAttribute("onSubmit", {handleEdit})
          // elementForm.setAttribute("onChange", {handleEditChange})
    
          let elementEditButton = document.createElement("button");
          
          let elementInput = document.createElement("input");
          elementInput.setAttribute("type", "text");
          elementInput.setAttribute("value", "");
          elementInput.setAttribute("id", "editText");
    
     
          //Creating another input and update button option for user

          elementDiv.appendChild(elementForm);
          elementForm.appendChild(elementInput);
          elementForm.appendChild(elementEditButton);
          
          elementEditButton.textContent = "Update Todo";
    
          // function editHandle (evt) {
          //   evt.preventDefault();
          //   console.log(edit);
          // }
    
          // function handleEditChange(evt) {
          //   const editbtn = evt.target.value;
          //   console.log(editbtn);
          // }
          
          //Event Listener for Element Edit Button
          elementForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            alert('update me?');
            let newEditText = document.getElementById("editText").value; //Gets the value from the input Id
            console.log(newEditText);
    
            //Now replace the newly inputed text by user into the todo
    
            //1: remove the update todo text box.
            elementForm.remove();
    
            //2: replace the old text with the new edit by inserted the value into the HTML DOM
            elementDiv.textContent = newEditText;
            elementDiv.appendChild(elementButtonDelete).textContent = "Delete" ;
            elementDiv.appendChild(elementButtonEdit).textContent = "Edit" ;
            
            console.log(todoTitleList)
    
          })
       
        });
      };
    
    };
    searchResultFeedback() //function call 
    
      
    }
  
  

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
   
  }




  return (
  <form id = "search-form" onSubmit={handleSearch} >
    Search:
    <input value= {search} onChange = {handleSearchChange} type="text"></input> 
    {/* onChange is event listener */}
    <button>Search</button>
    <br></br>

    
  </form>)
}

///=========================================
///=========================================


//NOTE: Time at 1:10AM and 12:52PM yields negative time results!!! So i prob need to factor in military time potentially for AM vs PM...

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
        console.log(typeof timeDifference.hours()) //Data type is a Number!! 
  
        timeDifference.minutes();
        console.log(timeDifference.minutes()); //display the minutes
  
        //Now start the count down passing in the hours and minutes
  
        //First put the hours and minutes display on the frontend html
        const inputTime = document.querySelector('#countdown').textContent = timeDifference.hours() + ":" + timeDifference.minutes()
  
        //Then get the time that we just put in the html
        const timeCount = document.getElementById('countdown');
  
  
        // countdown code starts here
        function updateCountDown () {
          const currentTimeNow = moment(); 
          const formatTimeHoursMinutes = currentTimeNow.format('hh:mm');
  
          timeCount.textContent = formatTimeHoursMinutes;
        }
  
        setInterval(updateCountDown, 1000);
  
  
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
  
          <div id = "countdown"></div>
      </div>
  )};




///=========================================
///=========================================
function App() {
  return (
    <div> 
    
      <Search />
      <br></br>

      <AddTodo />

      


    </div>




  );
}

export default App;
