import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchNavbarData = createAsyncThunk(
    "navbar/fetchNavbarData",
    async () => {
        const response = await fetch("/data/courses.json");
        const data = await response.json();
        return data.coursesMenu;
    }
)

const initialState = {
    menuItems: [],
    status: "idle",
    error: null
}


const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNavbarData.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchNavbarData.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.menuItems = action.payload;
        })
        .addCase(fetchNavbarData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default navbarSlice.reducer;