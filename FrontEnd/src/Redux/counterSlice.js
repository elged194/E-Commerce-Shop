import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPrpdect: [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink:
        "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1711514309/E-Commerce/3_nvthkj.jpg",
      numberIiems: 1,
    },
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  actions === (e) ==> API
    addToCart: (state, action) => {
      //   state.value += action.payload;
      console.log("helllllo");
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
