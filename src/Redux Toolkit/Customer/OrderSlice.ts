import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "../../api/Order";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return await getOrders();
});

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error";
      });
  },
});

export default orderSlice.reducer;
