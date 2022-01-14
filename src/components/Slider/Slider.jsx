import React,{useState} from 'react'
import ArrowRight from "../../assets/icons/ArrowRight";
import ArrowLeft from "../../assets/icons/ArrowLeft"
const Slider = (props) => {

    const [sliderNumber, setSliderNumber] = useState(props.sliderNumber)


    const handleSliderNext = ()=>{
        setSliderNumber(sliderNumber + 1);
        if (sliderNumber < props.children.length - props.breakPoint) {         
        }
    }

    const handleSliderPrev = () => {
        setSliderNumber(sliderNumber - 1)

    }
    
    return (
        <div className='slider'>
            <div className="slider__wrapper">
                <div className="slider__content">
                    <div className="slider__item" style={{transform: `translateX(-${sliderNumber * (100 / props.breakPoint)}%)`}}>
                        {props.children}
                    </div>  
                </div>
                 
                {
                    sliderNumber > 0   && (
                        <button 
                        className='slider__btn-prev'
                        onClick={handleSliderPrev}
                        >
                            <ArrowLeft />                        
                        </button>
                    )
                }

                {
                    sliderNumber < (props.children.length - props.breakPoint) &&(
                        <button
                            className="slider__btn-next"
                            onClick={handleSliderNext}
                        >
                            <ArrowRight/>
                        </button>
                    )           
                }    
            </div>
        </div>
    )
}

export default Slider
