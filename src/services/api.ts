import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  // requisições
  endpoints: (builder) => ({
    // <> contem o tipo de retorno
    // void seria um parÂmetro na requisição, que aqui não existe
    getJogos: builder.query<Game[], void>({
      // produtos é o que vem depois da URL base
      query: () => 'produtos'
    })
  })
})

// para cada endpoint teremos um hook
// useGetJogosQuery é o hook para fazer requisições
// 'GetJogos' de useGetJogosQuery vem de getJogos: definido dentro do endpoint
// 'Query'  de useGetJogosQuery vem de builder.query definido dentro do endpoint

export const { useGetJogosQuery } = api
export default api
