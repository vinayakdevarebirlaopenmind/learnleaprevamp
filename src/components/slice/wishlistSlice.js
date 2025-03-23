import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from local storage
const loadWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const saveWishlistToLocalStorage = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: loadWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.wishlistItems.push(action.payload);
        saveWishlistToLocalStorage(state.wishlistItems);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      saveWishlistToLocalStorage(state.wishlistItems);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
