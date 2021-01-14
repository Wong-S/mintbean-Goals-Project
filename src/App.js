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
    
      //if the searchString is in the todoTitleList then push those results in the searchResults list
      for (let i = 0; i < todoTitleList.length; i ++ ) {
        if (todoTitleList[i] === searchString) {
          searchResults.push(todoTitleList[i]);
        }
      }
    
      console.log('the length should be')
      console.log(searchResults);
      console.log(searchResults.length); //how many items in array
      let searchResultLength = searchResults.length;
    
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
        console.log(searchResults[i]);
        console.log('for looop execute')

        let elementForm = document.querySelector("#search-form");
    
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("search-result");
      
        let elementButtonEdit = document.createElement("button");
        elementButtonEdit.setAttribute("id", "edit-btn");
      
        let elementButtonDelete = document.createElement("button");
        elementButtonDelete.setAttribute("id", "delete-btn");
      
        elementForm.appendChild(elementDiv).textContent = searchResults[i]
        elementDiv.appendChild(elementButtonEdit).textContent = "Delete" ;
        elementDiv.appendChild(elementButtonDelete).textContent = "Edit" ;
      // let myClass = document.getElementsByClassName('search-result'),
      // myClassParent = myClass[0].parentNode

      // while ()
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
