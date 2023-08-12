import { configureStore } from "@reduxjs/toolkit";
import WaifuReducer from "./features/waifuSlice";

export const store = configureStore({
  reducer: {
    waifu: WaifuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
