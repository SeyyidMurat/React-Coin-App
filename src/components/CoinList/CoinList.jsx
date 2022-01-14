import React from 'react';
import StarIcon from "../../assets/icons//StarIcon";
import Table from '../table/Table';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import {coinListTableHead, transformCurrenyFormat,percentageColor,transformPercentageFormat} from "../../constants/dataIndex";
import {setAddFavoriteCoinList} from "../../redux/favoriteCoinListSlice";


const CoinList = () => {
    const { coinList, searchCoin } = useSelector((state) => state.coinList);
    const { favoriteCoinList } = useSelector((state) => state.favoriteCoinList);
    const dispatch = useDispatch(); 

    const addFavoriteCoin = (item) =>{    
        dispatch(setAddFavoriteCoinList(item))
    }
 

    const starTransformClass = (item) =>{
        const favorite = favoriteCoinList.some((i)=> i.id === item.id);
        return favorite
    }
    
   

    const filterCoinList = (item) =>{
        const filter = item.filter((val)=>searchCoin === '' ? val : val.id.toLowerCase().includes(searchCoin.trim().toLowerCase())) 
        return filter
    }
   
    return (
        <>
            <Table tableHead={coinListTableHead} >
                {
                    filterCoinList(coinList).length === 0 
                    
                    ? <tr><td className='feedback-info-coinList'>Aradığınız Coin Bulunamadı</td></tr>
                    
                    :filterCoinList(coinList).map((item)=>(
                        <tr key={item.id}>
                            <td>{item.market_cap_rank}{console.log(  )}</td>
                            <td>
                                <Link to={`/${item.id}`} className='d-flex align-items-center gap-1'>
                                    <img src={item.image} alt="img" style={{height: "40px"}}/>
                                    {item.name}
                                </Link>     
                            </td>
                            <td>{transformCurrenyFormat(item.current_price)}</td>
                            <td className={percentageColor(item.price_change_percentage_24h)}>
                                {transformPercentageFormat(item.price_change_percentage_24h,2)}
                            </td>
                            <td>{transformCurrenyFormat(item.total_volume)}</td>
                            <td><button onClick={()=>addFavoriteCoin(item)} className={`${starTransformClass(item) ? "star-active" : ""}`} ><StarIcon/></button></td>
                        </tr>
                    ))  
                }
            </Table>
        </>
    )
}

export default CoinList
