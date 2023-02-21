import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export enum Position {
  "Home",
  "Our mission",
  "Places",
  "Team",
  "Apply",
}

interface NavigationSlice {
  currentPosition: Position;
}

const initialState: NavigationSlice = {
  currentPosition: Position.Home,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentPosition: (state, action: PayloadAction<Position>) => {
      state.currentPosition = action.payload;
    },
  },
});

export const { setCurrentPosition } = navigationSlice.actions;
export default navigationSlice.reducer;
