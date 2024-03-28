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
      //   state.value += action.payload;
      console.log("+");
    },
    decreasNumberItems: (state, action) => {
      //   state.value += action.payload;
      console.log("-");
    },
    deleteItem: (state, action) => {
      //   state.value += action.payload;
      console.log("delet");
    },
  },
});

// export All Functions  From The Slice
export const { addToCart, increasNumberItems, decreasNumberItems, deleteItem } =
  counterSlice.actions;

export default counterSlice.reducer;
