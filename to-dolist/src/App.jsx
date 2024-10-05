import "./global.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "",
    trainer: "",
    id: uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };  

  let handleSubmit = (e)=>{
    e.preventDefault() 
    let newItem = {
      id : state.id , 
      course : state.course , 
      trainer : state.trainer
    } 
 let finalItems = [...state.items ,newItem] 
    setState({
      items : finalItems , 
      id : uuidv4(), 
      course : "",
      trainer: ""
    })
  } 

// console.log(state); 

let handleDelete = (x)=>{ // x=2  
   let filteredData = state.items.filter((value)=> value.id != x) //1!=2 , 2!=2, 3!=2
   console.log("filtered data" ,filteredData); // [{react}, {nodejs}] 
   setState({...state , items: filteredData}) 
}

let handleUpdate = (y)=>{   
    let restItems = state.items.filter((value)=> value.id != y) 
    let dataToEdit = state.items.find((value)=> value.id == y)
    console.log("dataToEdit",dataToEdit);  
    setState({
      ...state , 
      items : restItems ,
      course : dataToEdit.course ,
      trainer : dataToEdit.trainer   
    })
}

  return (
    <>
      <article>
        <h1>ToDoList</h1>
        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/> 
        </main>
      </article>
    </>
  );
};

export default App;
