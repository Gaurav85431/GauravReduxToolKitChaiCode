// First of all we will make configureStore 

import { configureStore } from '@reduxjs/toolkit';
// ye core redux se aaya hia na ki react se 


// store ko sirf reducer ki knowledge chahiye hote hia
import todoReducer from '../features/todo/ToDoSlice';





// configureStore se hm store lenge. Ye apne aap me leta hia. Most of the chizen object leti hai.
export const store = configureStore({

  // isme hm reducer ko pass karenge
  reducer: todoReducer


})