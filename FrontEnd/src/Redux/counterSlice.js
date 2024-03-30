import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPrpdect: [],
  selectedPrpdectID: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  actions === (e) ==> API
    addToCart: (state, action) => {
      // state.value += action.payload;
      const productQuantity = { ...action.payload, quantity: 1 };
      state.selectedPrpdect.push(productQuantity);

      state.selectedPrpdectID.push(action.payload.id);
    },
    increasNumberItems: (state, action) => {
      // state.value += action.payload;
      const increasQuantty = state.selectedPrpdect.find((e) => {
        return e.id === action.payload.id;
      });
      increasQuantty.quantity += 1;
    },
    decreasNumberItems: (state, action) => {
      // state.value += action.payload;
      const increasQuantty = state.selectedPrpdect.find((e) => {
        return e.id === action.payload.id;
      });
      increasQuantty.quantity -= 1;

      if (increasQuantty.quantity === 0) {
        const newArr = state.selectedPrpdect.filter((e) => {
          return e.id !== action.payload.id;
        });
        state.selectedPrpdect = newArr;

        const newArr2 = state.selectedPrpdectID.filter((e) => {
          return e !== action.payload.id;
        });
        state.selectedPrpdectID = newArr2;
      }
    },
    deleteItem: (state, action) => {
      // state.value += action.payload;
      const newArr = state.selectedPrpdect.filter((e) => {
        return e.id !== action.payload.id;
      });
      state.selectedPrpdect = newArr;
    },
  },
});

// export All Functions  From The Slice
export const { addToCart, increasNumberItems, decreasNumberItems, deleteItem } =
  counterSlice.actions;

export default counterSlice.reducer;
