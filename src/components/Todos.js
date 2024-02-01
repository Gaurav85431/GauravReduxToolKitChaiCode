import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/ToDoSlice'
// list show krne ke liye useSelector, list ko update/ delete krne ke liye useDispatch ka use.
// Jb useDispatch ka use karenge to hmare pass koi reducer hona chahiye. to hm reducer ko slice se lekar aayengi


function Todos() {

  const todos = useSelector(state => state.todos);//useSelector me hme state ka access milta hai 1 callback ke under

  // hme sare todos ko list krna hai. to we know ki ToDoSlice me initial state (jo ki object hai uske under todos array ke form me hai). To hm array se le sakte hia, lekin le kahan se to isi ke liye hm store ko banate hai, ki saari chiz hme store se mil jaaye



  const dispatch = useDispatch();



  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <button onClick={() => dispatch(removeTodo(todo.id))}> {/** jb click kre tb chale so we use callback. dispatch me removeTodo ko call kiya aur us todo ka id ko pass kiya jo ki hme remove krni hai */}
            X
          </button>
        </li>


      ))}
    </>
  )
}

export default Todos