import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import logo from '../../../public/logo.png'

import { Container } from './styles'

const Loading: React.FC = () => {
  const [active, setActive] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setActive(true)
    })

    router.events.on('routeChangeComplete', () => {
      setActive(false)
    })

    router.events.on('routeChangeError', () => {
      setActive(false)
    })

    return () => {
      router.events.off('routeChangeStart', () => {
        setActive(true)
      })

      router.events.off('routeChangeComplete', () => {
        setActive(false)
      })

      router.events.off('routeChangeError', () => {
        setActive(false)
      })
    }
  }, [])

  useEffect(() => {
    if (window) {
      setTimeout(() => setActive(false), 3000)
    }
  }, [])

  if (active)
    return (
      <Container>
        <div>
          <Image layout="responsive" src={logo} alt="Logo" />
        </div>
      </Container>
    )
  else return <></>
}

export default Loading
