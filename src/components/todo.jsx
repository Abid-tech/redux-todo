import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo,removeTodo,toggleComplete,editTrue, editTodo, cancelEdit } from '../slices/todo/todoSlice'
import './todo.css'

function Todo() {

   const [input,setInput] = useState('')
    const [editText, setEditText] = useState('')
   const [complete,setComplete] = useState(0)
   const dispatch = useDispatch()
   const todos = useSelector(state=>state.todos)

   const completedCount = todos.filter(todo => todo.isCompleted === true).length

   const addTodoHandler = (e)=>{
    e.preventDefault()

    if (input.trim()) { 
        dispatch(addTodo(input))
        setInput('')
    }
   }


   const handleEditClick = (todo) => {
      setEditText(todo.text)  // Set current text to edit input
      dispatch(editTrue(todo.id))
   }


   const handleSaveEdit = (todoId) => {
      if (editText.trim()) {
         dispatch(editTodo({ id: todoId, newText: editText }))
         setEditText('')
      }
   }


   const handleCancelEdit = (todoId) => {
      dispatch(cancelEdit(todoId))
      setEditText('')
   }

   const handleKeyPress = (e, todoId) => {
      if (e.key === 'Enter') {
         handleSaveEdit(todoId)
      } else if (e.key === 'Escape') {
         handleCancelEdit(todoId)
      }
   }

 

  return (
    <>
       <section id='top'>
        <div className='top-txt'>
            <h4>Daily Routine Manager</h4>
        </div>
       </section>

        
       <div className="container">
            <section id='dashboard'>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>Total Task</h4>
                                    <h5>{todos.length}</h5>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>Completed Task</h4>
                                    <h5>{completedCount}</h5>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>pending Task</h4>
                                    <h5>{todos.length-completedCount}</h5>
                                </div>
                            </div>
                        </div>
            </section>


            <section id='add-task'>
                <form action="" onSubmit={addTodoHandler}>
                    <div className="row">
                            <div className="col-lg-10">
                                <div className="sub-input">
                                    <input type="text" className='form-control' placeholder='Add a task to the list' value={input} onChange={(e)=> setInput(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="sub-btn">
                                    <input type="submit" value="Add task" />
                                </div>
                            </div>
                    </div>
                </form>
            </section>


            <section id='task-list'>
                <div className="row">
                    <h3>Task List</h3>
                    
                    {todos.map((todo)=>(

                        <div className="col-lg-12" key={todo.id}>
                            <div className={`task-itm ${todo.isCompleted ? 'completed' : ''}`}>
                                <h6>{todo.time}</h6>
                                <div className="row">
                                    <div className="col-lg-10">
                                            {todo.isEdit ? (
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    value={editText}
                                                    onChange={(e) => setEditText(e.target.value)}
                                                    onKeyDown={(e) => handleKeyPress(e, todo.id)}
                                                    autoFocus  
                                                    style={{ flex: 1 }}
                                                />
                                                <button 
                                                    onClick={() => handleSaveEdit(todo.id)}
                                                    className="btn-success"
                                                    style={{ padding: '5px 10px' }}
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={() => handleCancelEdit(todo.id)}
                                                    className="btn-danger"
                                                    style={{ padding: '5px 10px' }}
                                                >
                                                    Cancel
                                                </button>
                                                </div>
                                            ) : (
                                                <h5 style={{ 
                                                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                                                margin: 0,
                                                padding: '8px 0'
                                                }}>
                                                {todo.text}
                                                </h5>
                                        )}

                                    </div>
                                    <div className="col-lg-2">
                                        {!todo.isEdit && (  
                                        <>
                                            <button onClick={() => dispatch(removeTodo(todo.id))} disabled={todo.isCompleted}>
                                                <i className="far fa-trash-alt trash"></i>
                                            </button>
                                            <button onClick={() => dispatch(toggleComplete(todo.id))} disabled={todo.isCompleted}style={{ opacity: todo.isCompleted ? 0.5 : 1 }} >
                                                <i className="fa-regular fa-square-check check"></i>
                                            </button>
                                            <button onClick={() => handleEditClick(todo)} disabled={todo.isCompleted}>
                                                <i className="fa-regular fa-pen-to-square"></i> {/* Fixed: className not class */}
                                            </button>
                                       </>
                                        )}
                                    </div>
                                </div>
                                    
                            </div>
                        </div>

                    ))}
                    



                


                    


                </div>
            </section>
       </div>
    </>
  )
} 

export default Todo
