import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

interface ITDModelState {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}

const initialState: ITDModelState = {
  rotation: [-Math.PI / 2, 0, Math.PI],
  position: [0, 0, 0],
  scale: 1,
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
    transform: (state, action: PayloadAction<[number, number, number]>) => {
      state.position[0] = action.payload[0];
      state.position[1] = action.payload[1];
      state.position[2] = action.payload[2];
    },
    reScale: (state, action: PayloadAction<number>) => {
      state.scale = action.payload;
    },
  },
});

export const { rotate, transform, reScale } = TDModelSlice.actions;
export default TDModelSlice.reducer;
