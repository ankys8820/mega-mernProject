import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/product-list/productListSlice";

const user = {
  name: "Ankit",
  isAdmin: true,
};

export default configureStore({
  reducer: {
    user,
    product: productSlice,
  },
});
