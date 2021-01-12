//import logo from './logo.svg';
import './App.css';
import React from 'react'; //I imported this in here...
//import Moment from 'react-moment';
import * as moment from 'moment';
//=======================================================

//Edit Component:
// function EditTodo() {

//   const [editTitle, setEdit] = React.useState("");

  
//   function handleTodo(evt) {
//     evt.preventDefault();


//     const todoTitleList = [];  
//     todoTitleList.push(todoTitle);

//     let elementTitle = document.createElement("p");
//     let elementTitleDeleteButton = document.createElement("button");  //Delete Button
//     let elementTitleEditButton = document.createElement("button");  // Edit Button

//     document.querySelector("#todo-title").appendChild(elementTitle).textContent = todoTitleList ;
    
//     //Add Delete button each time new task is added
    
//     //NOTE: Finally, the button gets appended to EACH "p". Use the variable name, NOT "document.queryselector("p") which creates multiple "p", but duplicated buttons inside one "p" tag
//     elementTitle.appendChild(elementTitleDeleteButton).textContent = "Delete" ;
//     elementTitle.appendChild(elementTitleEditButton).textContent = "Edit" ;
    
//     //Delete Event Listener
//     elementTitleDeleteButton.addEventListener("click", (evt) => {
//       evt.preventDefault();
//       alert('Delete me');
//       elementTitle.remove();
//     });




      

     



//     }



  


//   function handleTodoTitleChange(evt) {
//     setTitle(evt.target.value);
   
    
//   }


//   return (
//     <div>
      
//         <form onSubmit = {handleEdit}>
//             Todo:
//             <input value={editTitle} onChange = {handleTodoEditChange} type="text"></input>
//             <button>Update Item</button>
//             <br></br>

            
//         </form>
        
//     </div>
// )
// };



/////////////////////////////////////



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

    let elementTitle = document.createElement("p");
    let elementTitleDeleteButton = document.createElement("button");  //Delete Button
    let elementTitleEditButton = document.createElement("button");  // Edit Button

    document.querySelector("#todo-title").appendChild(elementTitle).textContent = todoTitleList ;
    
    //Add Delete button each time new task is added
    
    //NOTE: Finally, the button gets appended to EACH "p". Use the variable name, NOT "document.queryselector("p") which creates multiple "p", but duplicated buttons inside one "p" tag
    elementTitle.appendChild(elementTitleDeleteButton).textContent = "Delete" ;
    elementTitle.appendChild(elementTitleEditButton).textContent = "Edit" ;
    
    //Delete Event Listener
    elementTitleDeleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      alert('Delete me');
      elementTitle.remove();
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







function App() {
  return (
    <div> 
      <AddTodo />
      
   
    </div>
  );
}

export default App;
