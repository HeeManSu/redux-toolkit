import { createSlice } from "@reduxjs/toolkit";
import DeleteallUser from "../../Components/DeleteallUser";
import { deleteallUsers } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            //This pushes the work that this adduser will perform.
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },

        // deleteallUser(state, action) {
        //    return state = [];
        // },
    },

    extraReducers(builder) {
        builder.addCase(deleteallUsers, () => {
            return [];
        })
    }
})

console.log(userSlice.actions);

export default userSlice.reducer;
//Exporting functions.
export const { addUser, removeUser } = userSlice.actions;
