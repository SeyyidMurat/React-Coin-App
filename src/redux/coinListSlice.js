import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  coinList: "",
  loading: false,
  error: "",
  searchCoin: "",
};

export const getCoins = createAsyncThunk("getCoins", async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
  );
  const result = await response.json();
  return result;
});

export const coinListSlice = createSlice({
  name: "coinList",
  initialState,
  reducers: {
    setSearchCoin(state, action) {
      state.searchCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.coinList = action.payload;
      state.loading = false;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetch data";
    });
  },
});

export const { setSearchCoin } = coinListSlice.actions;
export default coinListSlice.reducer;
