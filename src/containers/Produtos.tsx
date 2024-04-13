import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

// excluido pois não é mais necessário - api
// type Props = {
//   jogos: Game[]
//   // excluido pois não é mais necessário
//   // adicionarAoCarrinho: (jogo: Game) => void
// }

// excluido pois não é mais necessário
// const Produtos = ({ jogos, adicionarAoCarrinho }: Props) => {
// excluido pois não é mais necessário
// const Produtos = ({ jogos }: Props) => {
const Produtos = () => {
  //  data contem o retorno
  // : jogos é o rename de data
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {/* ? colocado por pode ser undefined */}
        {jogos?.map((game) => (
          // excluido pois não é mais necessário
          // <Produto key={game.id} game={game} aoComprar={adicionarAoCarrinho} />
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
