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
        <text>🤝THANK YOU SO MUCH, PLEASE VISIT AGAIN!🤝</text>
        <text>Created by Team ManaChutneys with ❤️!</text>
      </div>
    </footer>
  )
}

export default Footer