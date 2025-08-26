import { TRole } from "@/interfaces/global/roles";
import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";
interface ICurrentUser {
  name: string;
  email: string;
  role: TRole;
  image: string;
  authorized: boolean;
}

const initialState: ICurrentUser = {
  name: "",
  email: "",
  role: "USER",
  image: "",
  authorized: false,
};

const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
      console.log("STORE LOG", action);
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.image = action.payload.image;
      state.authorized = action.payload.authorized;
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;
