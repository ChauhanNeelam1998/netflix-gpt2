import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //Vanialla(older) Redux => DON'T MUTATE STATE
    addItem: (state, action) => {
      //mutable - directly updating the state
      // In Redux we have to mutate
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = {items: ["pizza"]}
    clearItem: (state, action) => {
      // RTK => either  Mutate  the existing state or return a new state
      //state.items.length = 0;  // originalState=[]

      return { items: [] }; // this new [] will be replaced inside originalState=[]
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
