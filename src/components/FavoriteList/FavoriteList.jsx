import React from 'react'
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {transformCurrenyFormat,percentageColor,transformPercentageFormat,favoriteListChartOptions} from "../../constants/dataIndex";
import Slider from '../Slider/Slider';
const FavoriteList = () => {
    
    const { favoriteCoinList } = useSelector((state) => state.favoriteCoinList);
      
    return (
        <div className='favoriCoin'>
            <h3 className='favoriCoin__title'>İzleme Listesi</h3>
            <div className="container">
                {
                    favoriteCoinList.length === 0 && (
                        <div className="card">
                            <h4>İzleme Listenizi oluşturun.. </h4>
                        </div>        
                    )
                }
               
                      
                { 
                        favoriteCoinList.length > 0 && ( 
                            <Slider
                                sliderNumber={0}
                                breakPoint={5}
                            >
                            {favoriteCoinList.map((item)=> (
                                <Link to={`${item.id}`} key={item.id} className="favoriCoin__card">
                                    <div className="card" >
                                        <div className="favoriCoin__card-head">
                                            <img src={item.image} alt="img" style={{height: "30px"}}/>
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="favoriCoin__card-body">
                                            <span className="favoriCoin__card-body-price">{transformCurrenyFormat(item.current_price)}</span>
                                            <span className={percentageColor(item.price_change_percentage_24h)}>
                                                {transformPercentageFormat(item.price_change_percentage_24h, 2)}
                                             </span>
                                        </div>
                                        <div className="card__footer">
                                             <Chart
                                                options={ item.price_change_percentage_7d_in_currency > 0
                                                ?{...favoriteListChartOptions.options, colors:["#4eaf0a"]}
                                                :{...favoriteListChartOptions.options, colors:["#e15241"]}}
                                                series={[{data:item.sparkline_in_7d.price}]}
                                                type='line'
                                                height='100px'
                                                width="160px"
                                            /> 
                                        </div>
                                    </div>
                                </Link>            
                            ))}
                        </Slider>       
                        )
                }                      
            </div>              
        </div>
    )
}

export default FavoriteList
