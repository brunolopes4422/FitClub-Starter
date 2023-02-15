import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
{/* o melgor anuncio*/}

            <div className="the-best-ad">
                <div></div>
                <span>Os melhores resultados da cidade!</span>
            </div>

            {/* Anuncio prinpal inicio heroi*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Se </span>
                    <span>Transforme.</span>
                </div>
                <div>
                    <span>O plano ideal para seu corpo!</span>
                </div>
                <div>
                    <span>
                        Aqui, vamos ajudá-lo com suas metas.
                    </span>
                </div>
            </div>

            {/*figures */}
            <div className="figures">
                <div>
                    <span>+3</span>
                    <span>graduações na area</span>
                </div>
                <div>
                    <span>+100</span>
                    <span>Alunos</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>planos </span>
                </div>
            </div>

            {/*hero bottons botoes da esquerda sup*/}
            <div className="hero-buttons">
                <buttons className="btn">Faça parte</buttons>
                <buttons className="btn">Saiba mais</buttons>
            </div>
        </div>
        <div className="rigth-h">
            <button className='btn'>Faça parte</button>


            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Frequência</span>
                <span>116 bpm</span>
            </div>

            {/*Hero images */}
            <img src={hero_image} alt="" className="hero-image" />
            <img src={hero_image_back} alt="" className="hero-image-back" />
            {/*calorias */}
            <div className="calories">
                <img src={Calories} alt="" />              
                <div>
                    <span>Calorias queimadas</span>
                    <span>220 kcal</span>
                </div>
            </div>


        
        </div>        
    </div>
  )
}

export default Hero