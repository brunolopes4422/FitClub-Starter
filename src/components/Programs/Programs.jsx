import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Saiba mais</span>
            <span>Planos</span>
            <span className='stroke-text'>Para você</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <spam>{program.heading}</spam>
                    <spam>{program.details}</spam>
                    <div className="join-now"><span>Começe agora</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Programs