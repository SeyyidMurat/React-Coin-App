import React,{useEffect,useState} from 'react';
import Chart from "react-apexcharts";
import {  useParams } from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';
import {  setHistorical, getHistoricalChart } from '../../redux/historicalChartSlice';
import {detailChartOptions,chartDays} from "../../constants/dataIndex";
const DetailCoinChart = () => {
    let {id} = useParams();
    const { historicalChartData, days} = useSelector((state) => state.historicalChart);
    const dispatch = useDispatch(); 
    const [activeClass, setActiveClass] = useState(1)
    const [tickAmountChart, setTickAmountChart] = useState("")

    const handleHistorical = (item) =>{
        dispatch(setHistorical(item.value))
        setActiveClass(item.id)
        setTickAmountChart(item.value)
    }

    useEffect(() => {

        dispatch(getHistoricalChart({id,days}));

    }, [days,id, dispatch])

    return (
        <>   
            {
               historicalChartData && (
                <div className="detailCoins__charts">
                <Chart
                    options={{
                        ...detailChartOptions.options,
                        xaxis: {
                            categories: historicalChartData.prices.map((coin) => coin[0]),
                            tickAmount: tickAmountChart === 7 ? 6 : 13,
                            labels: {
                                formatter: (timestamp) => {
                                    return days === 1 ? new Date(timestamp).toLocaleTimeString() : new Date(timestamp).toLocaleDateString()
                                },
                            }
                        }
                    }}
                    series={[{ name: "Fiyat", data: historicalChartData.prices.map((el) => el[1]) }]}
                    />
                    <div className="detailCoins__charts-btns">
                        {chartDays.map((item) => (
                            <button
                                className={`detailCoins__charts-btn ${activeClass=== item.id ? "active" :""}`}
                                key={item.id}
                                onClick={() => handleHistorical(item)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>                                
                </div>
               ) 
            }           
        </>       
    )
}

export default DetailCoinChart
