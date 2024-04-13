import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

// STORE é o estado da aplicação
// é quem vai receber o RootReducer (é um conjunto de reducers)
export const store = configureStore({
  // é o RootReducer
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware)
})

// store.getState pega o tipo da store
// ReturnType<typeof... retorna o tipo da store
// type RootReducer define RootReducer como sendo do tipo da store
export type RootReducer = ReturnType<typeof store.getState>
