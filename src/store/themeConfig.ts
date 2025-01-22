import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

interface IThemConfigState {
  isLoaded: boolean;
}

const initialState: IThemConfigState = {
  isLoaded: false,
};

const ThemeConfigSlice = createSlice({
  name: "themConfig",
  initialState,
  reducers: {
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setIsLoaded } = ThemeConfigSlice.actions;
export default ThemeConfigSlice.reducer;
