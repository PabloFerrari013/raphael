import styled from 'styled-components'
import {
  BsBook,
  BsClock,
  BsEnvelope,
  BsGeoAlt,
  BsInstagram,
  BsWhatsapp
} from 'react-icons/bs'

export const Container = styled.main`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f5f5f5;
  position: relative;
  z-index: 2;

  > strong {
    font-size: 1.25rem;
    margin-top: 1rem;
    text-shadow: 1px 1px 1px #977915;
  }

  > p {
    margin-bottom: 2rem;
    margin-top: 4px;
    font-size: 16px;
    text-shadow: 1px 1px 1px #977915;
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 16px;
    text-align: center;
    color: #f5f5f5;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 30px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 2px solid #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    font-weight: bold;
    text-shadow: 1px 1px 1px #977915;
    background-color: transparent;

    > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      transform: scale(1.05);
      background-color: rgba(125, 125, 125, 0.1);
    }
  }
`

export const Img = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 8.75rem;
  display: block;
  overflow: hidden;
`

export const WhatsAppIcon = styled(BsWhatsapp)``

export const ClockIcon = styled(BsClock)``

export const Localization = styled(BsGeoAlt)``

export const InstagranIcon = styled(BsInstagram)``

export const EmailIcon = styled(BsEnvelope)``

export const AlbumIcon = styled(BsBook)``
