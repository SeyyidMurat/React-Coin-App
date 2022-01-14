import React from 'react'
import CoinList from './CoinList';
import SearchIcon from "../../assets/icons/SearchIcon"
import { useSelector,useDispatch} from 'react-redux';
import { setSearchCoin } from '../../redux/coinListSlice';
const CoinListWrapper = () => {

    const { searchCoin } = useSelector((state) => state.coinList);
	const dispatch = useDispatch();
    return (
        <div className='coinList'>            
            <div className="coinList__header">
                <h2 className="coinList__header-title">Coin Listesi</h2>
                <div className="coinList__header-input">
                        <input 
                            type="text"
                            id='coninSearch'
                            placeholder='Arama Yapabilirsiniz....'
                            value={searchCoin}
                            onChange={(e)=>dispatch(setSearchCoin((e.target.value)))}
                        />
                        <label htmlFor="coninSearch">
                            <SearchIcon/>
                        </label>      
                    </div>            
                </div> 
                <div className="coinList__body">
                    <CoinList />      
            </div>        
        </div>             
    )
}

export default CoinListWrapper
