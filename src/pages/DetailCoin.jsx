import React,{useEffect} from 'react';
import {  useParams } from "react-router-dom";
import {transformCurrenyFormat} from "../constants/dataIndex";
import { useSelector,useDispatch} from 'react-redux';
import { getDetailCoins } from '../redux/coinDetailSlice';
import DetailCoinChart from '../components/DetailCoin/DetailCoinChart';
import TopNav from '../components/TopNav/TopNav';

const DetailCoin = () => {
    let {id} = useParams();

    const { detailCoin,loading,error} = useSelector((state) => state.detailCoin);

    const dispatch = useDispatch(); 

     useEffect(() => {
        dispatch(getDetailCoins(id))
     }, [id,dispatch])   
     

    return (
        <div className='main'>
            {
                loading && (
                    <div className="feedback-info">
                        <h2 className='feedback-info-item'>{`${error === "" ? "Sayfa Yükleniyor..." : error}`}</h2>
                    </div>
                )
            }
        <div className="detailCoins">
        <TopNav/>
        {detailCoin && (       
            <div className="container">   
                <div className="detailCoins__wrapper">
                    <div className="detailCoins__info">
                        <div className="detailCoins__info-title">
                            <img src={detailCoin.image.small} alt="" />
                            <h2>{detailCoin.name}</h2>
                        </div>
                        <div className="detailCoins__info-body">
                            <div className="detailCoins__info-body-col">
                                <h3>{`${detailCoin.name} Fiyatı :`}</h3>
                                <span>{transformCurrenyFormat(detailCoin.market_data.current_price.usd)}</span>
                            </div>
                            <div className="detailCoins__info-body-col">
                            <h3>{`${detailCoin.name} Açıklama :`}</h3>
                                <p>{`${detailCoin.description.en.substr(0,160)}...`}</p>
                            </div>
                            <div className="detailCoins__info-body-col">
                                <h3>{`${detailCoin.name} Piyasa Değeri :`}</h3>
                                <span>{transformCurrenyFormat(detailCoin.market_data.market_cap.usd)}</span>
                            </div>
                            <div className="detailCoins__info-body-col">
                                <h3>24 Saat Düşük / 24 Saat Yüksek</h3>
                                <span>
                                    {` ${transformCurrenyFormat(detailCoin.market_data.low_24h.usd)} /
                                        ${transformCurrenyFormat(detailCoin.market_data.high_24h.usd)}`
                                    }    
                                </span>
                            </div>
                        </div>
                    </div>
                    <DetailCoinChart/>
                </div>       
            </div>
            )
            }
            </div>
        </div>
    )
}

export default DetailCoin
