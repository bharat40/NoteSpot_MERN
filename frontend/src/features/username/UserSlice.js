import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            const name = action.payload;
            state.username = name;
        },
        removeUserName: (state, action) => {
            state.username = "";
        }
    }
})

export const { setUserName, removeUserName } = userSlice.actions
export default userSlice.reducer;