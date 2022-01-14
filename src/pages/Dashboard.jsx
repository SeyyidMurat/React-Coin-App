import React,{useEffect} from 'react';
import CoinListWrapper from '../components/CoinList/CoinListWrapper';
import FavoriteList from "../components/FavoriteList/FavoriteList";
import { getCoins } from '../redux/coinListSlice';
import { useSelector, useDispatch } from 'react-redux';
const Dashboard= () => {
    const { coinList,loading,error} = useSelector((state) => state.coinList);

	const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCoins());
    }, [dispatch])

    return (
        <div className="main">
			{
                loading && (
                    <div className="feedback-info">
                        <h2 className='feedback-info-item'>{`${error === "" ? "Sayfa Yükleniyor..." : error}`}</h2>
                    </div>
                )
            }
        

            {coinList && 
                <div className='dashboard'>
                    <FavoriteList/>         
                    <CoinListWrapper/>
                </div>
            }
            
        </div>       
    )
}

export default Dashboard
