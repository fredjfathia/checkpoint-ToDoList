import React, { useState} from 'react';
import './App.css';

function App() {
  var [item,setItem]=useState('')
  var [time,setTime]=useState('')
  const [todos,setTodos]=useState([])
  let d=new Date()
  const handleItem=(e)=>{
    setItem(e.target.value)
  
  }
  //.toDateString()
  const handleTodo=(e)=>{
    
   setTodos([...todos,{id:Math.random(),item:item,time:time,date:d.toLocaleDateString()}]);
 }
  const removeItem=(x)=>{
   setTodos(todos.filter(el=>el.id!==x))
  }
  const editItem=(x)=>{
    const y= prompt("Edit your task");
    const z=todos.find(el=>(el.id===x));
setTodos(todos.map(el=>(el.id===x)?{id:x,item:y,time:z.time,date:z.date}:el))
  }
  
  return (
    <div className="App" >
      <div className="image">
      <h1>To Do List</h1>
      <br></br>
      <br></br>
      <div >
      <input placeholder="task" type="text" onChange={(e)=>handleItem(e)}/>
      <input type="date" onChange={(e)=>setTime(e.target.value)}/>
      <button className="btn-2" onClick={handleTodo}>Add Item</button>
      
      </div>
      <div>
        <br></br>
        <br></br>
        <table>
        {todos.map((el,i)=>
        <tr className={(i%2===0)?"CH1":"CH2"}>
        <td >{el.item}</td>
        <td >{el.date}</td>
        <td >{el.time}</td>
        <td ><div style={{display:"flex",justifyContent:"space-between",width:"100px" ,float:"right",fontSize:"30px"}}>
        <i class="fas fa-edit green" onClick={()=>editItem(el.id)}></i>
        <i class="fas fa-trash red"  onClick={()=>removeItem(el.id)}></i>
        </div></td>
        </tr>
         )}
         </table>
      </div>
      </div>
    </div>

  );
}

export default App;
