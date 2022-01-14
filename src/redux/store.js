import { configureStore } from '@reduxjs/toolkit';
import coinListSlice from './coinListSlice';
import favoriteCoinListSlice from "./favoriteCoinListSlice";
import coinDetailSlice from "./coinDetailSlice";
import historicalChartSlice from "./historicalChartSlice";
export const store = configureStore({
	 reducer: {
		coinList:coinListSlice, 
		favoriteCoinList:favoriteCoinListSlice,
		detailCoin:coinDetailSlice,
		historicalChart:historicalChartSlice

	}, 
});