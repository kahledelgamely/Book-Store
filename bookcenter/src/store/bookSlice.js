import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBooks = createAsyncThunk
    ('book/getBooks', async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("http://localhost:3008/books")
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

export const bookSlice = createSlice({
    initialState: { books: [], isLoading: false, error: null },
    name: "book",
    extraReducers: {
        //getBooks
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;

        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
    }
})

export default bookSlice.reducer
