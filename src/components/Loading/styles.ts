import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-image: url('/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  @keyframes zoom {
    0% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1.2);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  > div {
    display: block;
    width: 8rem;
    border-radius: 8rem;
    overflow: hidden;

    animation: zoom infinite 5s;

    @media (min-width: 500px) {
      width: 8rem;
    }
  }
`
