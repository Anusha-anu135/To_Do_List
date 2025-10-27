
import React,{useState} from 'react'

const App = () => {
    const[todo,setTodo]=useState(' ');
    const[todoList,setTodoList]=useState([]);


    const addTodo=()=>{
        if(todo.trim() ==='')
            return;
    
        setTodoList([...todoList,{id:Date.now(),text:todo,completed:false}])
        setTodo('');
    }



    const deleteTodo=(id)=>{
        setTodoList(
            todoList.filter((item)=>item.id !==id)

    )}

  return (
    <div className='login'>
      <h1>To-Do-List</h1>
      <div className="input-container">

        <input className='x' type="text" placeholder='Add a new task...' value={todo} onChange={((e)=>setTodo(e.target.value))} />

        <button className='add-btn' onClick={addTodo} > Add</button>

      </div>
      <ul className='todo-list'>
        {todoList.map((item)=>(
            <li key={item.id} 
           
            style={{cursor:'pointer',textDecoration:item.completed? 'line-through':'none',color:item.completed? 'gray':'black'}}

               > <span>{item.text}</span>
                  <button className='delete-btn'
                  onClick={(e)=>{
                   
                    deleteTodo(item.id);
                 }}>
                      Delete </button>
               </li>
            ))

        }
      </ul>
    </div>
  )
}

export default App