import React, {useState} from "react"


//this is a function based component
function ToDoList(){

const[tasks, setTasks] = useState(["Eat breakFast","Take a Shower","Walk the Dog"]);
const[newTask, setNewTasks] = useState("");

const handleInputChange = (event)=>{
    setNewTasks(event.target.value);
}
const addTask =()=>{
//use the trim method to remoove any write space 
    if(newTask.trim() !==""){

        setTasks(t=>[...t, newTask]);
        setNewTasks("");
    }
}
const deleteTask =(index)=>{
const updatedTasks = tasks.filter((_,i) => i !==index);
setTasks(updatedTasks);

}
const moveTaskUp =(index)=>{
          if(index>0){
            //array destructing
            const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index-1]]=
    [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
          }

}
const moveTaskDown =(index)=>{
    if(index>0){
        //array destructing
        const updatedTasks = [...tasks];
[updatedTasks[index], updatedTasks[index-1]]=
[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
      }

}
return(

<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
   <input type="text"
    placeholder="Enter a task..." 
    value = {newTask}
    onChange = {handleInputChange}/>
    </div>
   <div>
    <button className="add-button" onClick ={addTask}>Add</button>
   </div> 

   <ol>
    {tasks.map((task,index) =>
    <li key = {index}>
<span className ="text">{task}</span>
<button
    className ="delete-button"
    onClick={() =>deleteTask(index)}>
        Delete
</button>
<button
    className ="move-button"
    onClick={() =>moveTaskUp(index)}>
        Up
</button>
<button
    className ="move-button"
    onClick={() =>moveTaskDown(index)}>
        Down
</button>
    </li>
    
    )}
   </ol>

</div>);

}
export default ToDoList