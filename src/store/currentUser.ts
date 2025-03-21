import { TRole } from "@/interfaces/global/roles";
import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";
interface ICurrentUser {
  name: string;
  email: string;
  role: TRole;
}

const initialState: ICurrentUser = {
  name: "",
  email: "",
  role: "USER",
};

const CurrentUserSlice = createSlice({
  name: "themConfig",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;
