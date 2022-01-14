import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	favoriteCoinList: [],
	
};


export const favoriteCoinListSlice = createSlice({
	name: 'favoriteCoinList',
	initialState,
	reducers: {
		setAddFavoriteCoinList(state,action){
			const addItem = state.favoriteCoinList.find((el)=> el.id === action.payload.id)
			if(!addItem){
				state.favoriteCoinList= [...state.favoriteCoinList, action.payload]
			};		
		},
		setRemoveFavoriteCoinList(state,action){
			const filterItem = state.favoriteCoinList.filter((el)=> el.id !== action.payload.id)
			state.favoriteCoinList = filterItem
		}
	}

});

export const {setAddFavoriteCoinList,setRemoveFavoriteCoinList} = favoriteCoinListSlice.actions;
export default favoriteCoinListSlice.reducer;