import React from 'react'
import { useContextGlobal } from './utils/global.context'
import LogoDH from '/images/DH.png'
import LogoInstaDark from '/images/ico-instagram-dark.png'
import LogoFaceDark from '/images/ico-facebook-dark.png'
import LogoWhatsDark from '/images/ico-whatsapp-dark.png'
import LogoTikTokDark from '/images/ico-tiktok-dark.png'
import LogoInsta from '/images/ico-instagram.png'
import LogoFace from '/images/ico-facebook.png'
import LogoWhats from '/images/ico-whatsapp.png'
import LogoTikTok from '/images/ico-tiktok.png'

const Footer = () => {
  const { state } = useContextGlobal()

  return (
    <footer className={state.theme === true ? "dark" : ""}>
      <div>
        <p>Powered by</p>
        <img src={LogoDH} alt='DH-logo' />
      </div>
      <div>
        <a href='https://www.facebook.com' alt='Facebook-logo' target='_blank' rel='noopener noreferrer'><img src={state.theme === false ? LogoFaceDark : LogoFace} /></a>
        <a href='https://www.instagram.com' alt='Instagram-logo' target='_blank' rel='noopener noreferrer'><img src={state.theme === false ? LogoInstaDark : LogoInsta} /></a>
        <a href='https://www.whatsapp.com' alt='Whatsapp-logo' target='_blank' rel='noopener noreferrer'><img src={state.theme === false ? LogoWhatsDark : LogoWhats} /></a>
        <a href='https://www.tiktok.com' alt='TikTok-logo' target='_blank' rel='noopener noreferrer'><img src={state.theme === false ? LogoTikTokDark : LogoTikTok} /></a>
      </div>
    </footer>
  )
}

export default Footer
