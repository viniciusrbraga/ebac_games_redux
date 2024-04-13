import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  // excluido pois não é mais necessário - api
  // const [games, setGames] = useState<Game[]>([])
  // // const [carrinho, setCarrinho] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('/produtos')
  //     .then((res) => res.json())
  //     .then((res) => setGames(res))
  // }, [])

  // function adicionarAoCarrinho(jogo: Game) {
  //   if (carrinho.find((game) => game.id === jogo.id)) {
  //     alert('Item já adicionado')
  //   } else {
  //     setCarrinho([...carrinho, jogo])
  //   }
  // }

  return (
    // Provider é o container da aplicação. Só assim temos acesso ao estado
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        {/* excluido pois não é mais necessário */}
        {/* <Header itensNoCarrinho={carrinho} /> */}
        <Header />
        {/* excluido pois não é mais necessário */}
        {/* <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} /> */}
        {/* <Produtos jogos={games} /> */}
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
