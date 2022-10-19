import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../../../public/logo.png'

import {
  AlbumIcon,
  Container,
  Img,
  EmailIcon,
  InstagranIcon,
  Localization,
  WhatsAppIcon
} from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Img>
        <Image src={Logo} alt="Rapahel Cabral" layout="responsive" />
      </Img>

      <strong>@raphaelcabralfotografia</strong>

      <p>Somos especialistas em festas infantís</p>

      <Link
        href="https://api.whatsapp.com/send?phone=5527981573037&text=Podemos%20marcar%20um%20hor%C3%A1rio%20%3F%20"
        passHref
      >
        <a target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span>Vamos conversar no WhatsApp?</span>
        </a>
      </Link>

      <Link
        href="https://goo.gl/maps/fTGzXrusMzUWf1Db6"
        target="_blank"
        passHref
      >
        <a target="_blank" rel="noreferrer">
          <Localization />
          <span>Conheça nossa localização</span>
        </a>
      </Link>

      <Link
        href="https://www.instagram.com/raphaelcabralfotografia/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        passHref
      >
        <a target="_blank" rel="noreferrer">
          <InstagranIcon />
          <span>Veja nosso perfil do Instagram</span>
        </a>
      </Link>

      {/* <Link href="/serviços.pdf" passHref target="_blank">
        <a download target="_blank">
          <AlbumIcon />
          <span>Consulte nossos serviços</span>
        </a>
      </Link> */}

      <Link href="mailto:raalestudio@gmail.com" passHref>
        <a>
          <EmailIcon />
          <span>Envie um e-mail</span>
        </a>
      </Link>
    </Container>
  )
}

export default Main
