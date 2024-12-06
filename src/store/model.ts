import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

interface ITDModelState {
  rotation: [number, number, number];
}

const initialState: ITDModelState = {
  rotation: [0, 0, 0],
};

const TDModelSlice = createSlice({
  name: "tDModel",
  initialState,
  reducers: {
    rotate: (state, action: PayloadAction<[number, number, number]>) => {
      state.rotation[0] = action.payload[0];
      state.rotation[1] = action.payload[1];
      state.rotation[2] = action.payload[2];
    },
  },
});

export const { rotate } = TDModelSlice.actions;
export default TDModelSlice.reducer;
