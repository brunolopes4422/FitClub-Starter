import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser' 

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uuwvi6h', 'template_gxkrbfh', form.current, '914cvOir1efwG-tew')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>pronto</span>
                <span>para mudar?</span>
            </div>
            <div>
                <span>supere</span>
                <span className='stroke-text'>seus limites!</span>
            </div>
            
        </div>
        <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type='email' name="user_email" placeholder='Digite seu email' />
                <button className='btn btn-j'>Entre agora</button>
            </form>
        </div>
    </div>
  )
}

export default Join