import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPrpdect: [

  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  actions === (e) ==> API
    addToCart: (state, action) => {
        // state.value += action.payload;
        const productQuantity = {...action.payload , "quantity":1 };
        state.selectedPrpdect.push( productQuantity )
    },
    increasNumberItems: (state, action) => {
        const increasQuantty = state.selectedPrpdect.find((e)=>{
            return( e.id === action.payload.id);
        })
        increasQuantty.quantity += 1
    },
    decreasNumberItems: (state, action) => {
        const increasQuantty = state.selectedPrpdect.find((e)=>{
            return( e.id === action.payload.id);
        })
        increasQuantty.quantity -= 1
    },
    deleteItem: (state, action) => {
        
    },
  },
});

// export All Functions  From The Slice
export const { addToCart, increasNumberItems, decreasNumberItems, deleteItem } =
  counterSlice.actions;

export default counterSlice.reducer;
