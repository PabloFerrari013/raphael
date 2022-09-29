import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../../../public/logo.jpg'

import {
  AlbumIcon,
  ClockIcon,
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

      <p>Somos especialistas em festas infantis</p>

      <Link href="https://api.whatsapp.com/send?phone=5527981573037" passHref>
        <a target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span>Vamos conversar no WhatsApp?</span>
        </a>
      </Link>

      <Link
        href="https://api.whatsapp.com/send?phone=5527981573037&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
        target="_blank"
        passHref
      >
        <a target="_blank" rel="noreferrer">
          <ClockIcon />
          <span>Vamos marcar um horário?</span>
        </a>
      </Link>

      <Link
        href="https://goo.gl/maps/Mm3upT58NAuX32yN9"
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
          <span>Veja nosso perfil do Intagran</span>
        </a>
      </Link>

      <Link href="mailto:@raphaelcabralfotografia" passHref>
        <a>
          <EmailIcon />
          <span>Envie um e-mail</span>
        </a>
      </Link>

      <Link href="/albuns.pdf" passHref target="_blank">
        <a download target="_blank">
          <AlbumIcon />
          <span>Veja nossos álbuns</span>
        </a>
      </Link>
    </Container>
  )
}

export default Main
