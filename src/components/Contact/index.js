import React from 'react'
import "./style.css"

function Contact() {
  return (
    <div>
        <div className='contactSection'>
        <h2 className='contactTitle'>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h4 className='contactSubTitle'>Email: </h4> <a href="mailto:victorbiscio1@hotmail.com">victorbiscio1@hotmail.com</a>
            <h4 className='contactSubTitle'>GitHub: </h4> <p>Reinkaoss</p>
            <h4 className='contactSubTitle'>LinkedIn:</h4> <p>Victor Biscio</p>
            </div>
    </div>
  )
}

export default Contact