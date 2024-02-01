import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import logo from './logo.svg';

function App() {

  // Hme <AddTodo /> aur <Todos /> ko wrap krna hoga <Provider> me . To hm isko app.js me ya main.js me v wrap kar skte hia. Intention ye hai ki saare component wrap ho jay chahe hm top level per(index.js ya main.jsx) me ya 2nd level per (app.js) me ho isse koi fark nhi padta hai.

  return (
    <div>
      <h1>React Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
