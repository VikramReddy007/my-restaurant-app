import React from 'react'
import './footer.css'

window.onload = () => {
let root = document.documentElement;
document.addEventListener('resize', () => {
  root.style.setProperty('--screen-x', window.screenX)
  root.style.setProperty('--screen-y', window.screenY)
})
}

const Footer = () => {
  return (
    <footer>
      <div className='max-width created-by'>
        <p><span role='img' aria-label='handshake'>🤝</span>THANK YOU SO MUCH, PLEASE VISIT AGAIN!<span role='img' aria-label='handshake'>🤝</span></p>
        <p>Created by Team ManaChutneys with <span role='img' aria-label='red-heart'>❤️</span>!</p>
      </div>
    </footer>
  )
}

export default Footer;