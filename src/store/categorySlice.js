import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "./state";


const categorySlice = createSlice({
    name:'category',
    initialState:{
        data:[],
        category:"",
        status: STATUSES.IDLE,
    },
    reducers:{
        setCategory(state,action){
               state.category = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.data = action.payload;
                
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

// Thunks
export const fetchCategory = createAsyncThunk('category/fetch', async () => {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();
    return ["All",...data];
});

