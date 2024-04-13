import * as S from './styles'

// Removido pois não será mais necessário
// import { Game } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

// Removido pois não será mais necessário
// type Props = {
//   itensNoCarrinho: Game[]
// }

// referencia ao itensNoCarrinho removido também
// const Header = ({ itensNoCarrinho }: Props) => {
const Header = () => {
  // seletor para extrair os dados da store
  // seleciona o estado, depois o carrinho, e depois os itens
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  // troca de itensNoCarrinho por itens
  // const valorTotal = itensNoCarrinho.reduce((acc, item) => {
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {/* troca de itensNoCarrinho por itens */}
          {/* {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)} */}
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
