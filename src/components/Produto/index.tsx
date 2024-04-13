import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  game: Game
  // excluido pois não é mais necessário
  // aoComprar: (jogo: Game) => void
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

// excluido pois não é mais necessário
// const Produto = ({ game, aoComprar }: Props) => {
const Produto = ({ game }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>
      <S.Titulo>{game.titulo}</S.Titulo>
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>
      {/* excluido pois não é mais necessário */}
      {/* <S.BtnComprar onClick={() => aoComprar(game)} type="button"> */}
      <S.BtnComprar onClick={() => dispatch(adicionar(game))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
