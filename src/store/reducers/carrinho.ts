// SLICES são fatias de funcionalidades
// neste arquivo temos as ACTIONS e os REDUCERS
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

// o initialState precisa ser tipado
type CarrinhoState = {
  itens: Game[]
}

// objeto criado para o estado inicial
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  // nome da fatia
  name: 'carrinho',

  // o reducer precisa receber o estado inicial
  initialState,
  reducers: {
    // toda a parte de mudança de estado é feita aqui

    // adicionar é uma função que recebe um jogo
    // procura o jogo no carrinho
    // se encontrar, mostra um alerta
    // se não encontrar, adiciona ao carrinho

    // recebe o estado e uma action do tipo PayloadAction
    // <Game> é o que vai estar no Payload
    adicionar: (state, action: PayloadAction<Game>) => {
      // o payload é armazenado na variável jogo
      // o payload é do tipo Game, que está definido em App.tsx
      const jogo = action.payload

      // o tipo do itens foi definido anteriormente
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

// exporta as ections
export const { adicionar } = carrinhoSlice.actions

//exporta as reducers
export default carrinhoSlice.reducer
