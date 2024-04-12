import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    value: {
      name: localStorage.getItem("name") || "",
      surname: localStorage.getItem("surname") || "",
    },
  },
  reducers: {
    // setName: (state, { payload } : { payload: string }) => {
    // state.value.name = payload;
    // localStorage.setItem("name", payload);
    setName: (state, action) => {
      console.log("state", state, "action", action, "action.payload", action.payload)
      state.value.name = action.payload;
      localStorage.setItem("name", action.payload);
    },
    setSurname: (state, { payload }: { payload: string }) => {
      state.value.surname = payload;
      localStorage.setItem("surname", payload);
    },
  },
});

export const { setName, setSurname } = personSlice.actions;
export const personReducer = personSlice.reducer;
