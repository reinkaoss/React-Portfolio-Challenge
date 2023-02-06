import React from 'react'
import "./style.css"

function Contact() {
  return (
    <div>
        <div className='contactSection'>
        <h2 className='contactTitle'>Contact Me</h2>
            <h4 className='contactSubTitle'>Email: </h4> <a href="mailto:victorbiscio1@hotmail.com">victorbiscio1@hotmail.com</a>
            <h4 className='contactSubTitle'>GitHub: </h4> <p><a href="https://github.com/reinkaoss">Reinkaoss</a></p>
            <h4 className='contactSubTitle'>LinkedIn:</h4> <p>Victor Biscio</p>
            </div>
    </div>
  )
}

export default Contact