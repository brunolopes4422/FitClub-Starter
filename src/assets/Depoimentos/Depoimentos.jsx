import React, {useState} from 'react';
import './Depoimentos.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


const Depoimentos = () => {
 /*codigo pra puxar informações do depoimentos, origem db testimonialsdata*/

            const [selected, setselected] = useState(0);
            const tLength = testimonialsData.length;

  return (
    <div className="Depoimentos">
        <div className="left-d">
            <span>Depoimentos</span>
            <span className='stroke-text'>O que dizem</span>
            <span>sobre a gente</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-d">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img
                    onClick={()=>{
                      selected===0
                      ? setselected(tLength -1)
                      : setselected((prev)=> prev -1)
                    }} 
                    src={leftArrow} 
                    alt="" 
                />
                <img
                    onClick={()=> {
                        selected === tLength - 1
                          ? setselected(0)
                          : setselected((prev) => prev + 1); 
                    }} 
                    src={rightArrow} 
                    alt="" 
                />
            </div>
        </div>
    </div>
  )
}

export default Depoimentos