import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/ToDoSlice";

function AddTodo() {

  // Store, reducer ye Redux/ Redux Toolkit hai.||| useSelector, useDispatch ye react ka wireup hia ki kis tarah se redux use hoga ki hai


  // add hoga dispatch se
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault()
    // dispatch ke under hm wo method ko use karenge jo ki hme todoSlice.js se export kra tha. 
    // dispatch ke under hm reducer ko call krte hai.
    dispatch(addTodo(input)) // hmne dispatch ke under addTodo ko call kra uske under hmne inpupt ko send kra
    setInput(''); //ab jo input ho gya hai to fir v input box me display pr show hoga to hm uske liye setInput('') ko wapas se clean kr denge.
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input type='text' placeholder='Enter todo' value={input} onChange={(e) => setInput(e.target.value)} />

      <button type='submit'>Add Todo</button>
    </form>
  )

}
export default AddTodo;