import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
	historicalChartData:"",
    days:1
	
};


export const getHistoricalChart = createAsyncThunk('getHistoricalChart', async (item) =>{
	const {id, days} = item
	const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
	const result = await response.json();
	return result;
});



export const historicalChartSlice = createSlice({
	name: 'historicalChart',
	initialState,
	reducers: {
        setHistorical(state, action) {
            state.days = action.payload;
          },
	},
	extraReducers:(builder)=>{
		builder.addCase(getHistoricalChart.fulfilled, (state,action)=>{
			state.historicalChartData = action.payload;
			state.loading=false;
		});

	}

});

export const { setHistorical } = historicalChartSlice.actions;
export default historicalChartSlice.reducer;