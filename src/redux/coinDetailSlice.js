import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
	detailCoin:"",
	loading:false,
	error:""

};

export const getDetailCoins = createAsyncThunk('getDetailCoins', async (id) =>{
	const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
	const result = await response.json();
	return result;
});


export const coinDetailSlice = createSlice({
	name: 'coinDetail',
	initialState,
	reducers: {
	
	},
	extraReducers:(builder)=>{
	
		builder.addCase(getDetailCoins.pending, (state, action) => {
			state.loading = true;
			state.error = "";
		  });
		  builder.addCase(getDetailCoins.fulfilled, (state, action) => {
			state.detailCoin = action.payload;
			state.loading = false;
		  });
		  builder.addCase(getDetailCoins.rejected, (state, action) => {
			state.loading = false;
			state.error = "Error fetch data";
		  });
	}

});


export default coinDetailSlice.reducer;