import React from 'react'
import { Container, Players } from './style'
import { GlobalStyle } from './styles/GlobalStyle'

import { Player1 } from './components/Player1/player1'
import { Player2 } from './components/Player2/player2'
import { Player3 } from './components/Player3/player3'

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Player1 />
      <Players>
        <Player2 />
        <Player3 />
      </Players>
    </Container>
  )
}

export default App
