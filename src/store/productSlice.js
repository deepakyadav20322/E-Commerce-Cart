import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { STATUSES } from "./state";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        categoryWiseData :[],
        status: STATUSES.IDLE,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const newData = action.payload.map((item) => ({
                    ...item,
                    itemStatus: false, // Add the new property to each item ,to check item availablity in cart. 
                  }));
                state.data = newData;
                
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProductsByCategory.pending,(state,action)=>{
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductsByCategory.fulfilled,(state,action)=>{
                state.categoryWiseData = action.payload ;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductsByCategory.rejected,(state,action)=>{
                state.status = STATUSES.ERROR;
            })
    },


});



// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    return (data.products);
});

export const fetchProductsByCategory = createAsyncThunk('productsByCategory/fetch', async (category) => {
    console.log(category);
    if(category!==""){
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    console.log(data)
    return data.products;
    }else{
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    console.log(data,"45454")
    return data.products;
    }
});


// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
