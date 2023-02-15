import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>ESTA PRONTO</span>
            <span>PARA COMEÇAR</span>
            <span className='stroke-text'>SUA JORNADA?</span>
        </div>

        {/*cartoes de planos */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>R$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>+ BENEFÍCIOS</span>
                    </div>
                    <button className="btn">Faça parte</button>
                </div>
            ))}
        
        </div>
    </div>


    
  )
}

export default Plans