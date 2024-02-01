import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid = generate unique id

const initialState = {  //hm isko object {} ya array [] ke form me rakh sakte hia.

  todos: [{ id: 1, text: "Hello World" }]

}

// reducer =functionality
// slice = reducer ka hi bada bahi hai.
// createslice me object jayega.

export const todoSlice = createSlice({
  // isme jo name denge wo hm redux toolkit ke chrome extension me show hoga.
  name: 'todo',
  initialState, // Har slice ka multiple state hoti hai lekin har slice ka initial sate  . upper variable me hmne value diyua nhi hia.

  // to make reducer.
  reducers: { // reducer me properties and funtion aati hai.

    // contextAPI me hm hmesa function ka declaration kar rhe thhe, uski defination nhi likh rhe thhe.
    // redux toolkit me hm hmesa function ka defination likhte hai na ki declaration

    addTodo: (state, action) => {
      // addTodo krne pr 2 chiz ka access milega state, action.
      //  state batayega ki avi kiya value hai.     action batayega ki jb koi value dene ho for any purpose like delete krne ke liye id dene hai to wo action ke through diya jayega.



      const Todo = {
        id: nanoid(), // give unique id. Hm Date.now() v laga skte hai.
        text: action.payload // action ke under payload property hai uske under text hai, to hm usko send kar rhe hia.
        // payload object hia isme id, email etc kuch v aa skta hia.
      }

      // to update state
      state.todos.push(Todo); //initial state ke under ke todos ke under hm Todo ka value send karenge

    },
    removeTodo: (state, action) => {

      // jo v state hia aur jo action aa rha hai.

      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      // state.todos ko hi override kar dete hai, to iske liye hm state.todos lenge aur isper hm filter laga denge, filter ke under harek value ko access milega. To hm check krenge ki todo ka id match nhi hona chahiye action ke saath jo payload vej rhe hai ussse

    }


  }
})

export const { addTodo, removeTodo } = todoSlice.actions
// To es actions me se value mil jeyegi i.e. addTodo aur removeTodo

export default todoSlice.reducer;
// store.js ko saare reducer ke baare me awareness chahiye. Agar isko awareness nhi hia to store maintain nhi kar paayega.
// Ye hr kisi se value lekar update nhi karega, mere under jo sb reducer update karega, sirf unse hi value lekar update karta hau
// agar hm koi aur reducer ya fir koi aur Slice (like authenticationSlice ) banate hai to usko hme export krna hi padega.
