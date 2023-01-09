import { Tela, Title, Card, Description } from "./cardStyleCatch"


export function Cardcatch(props) {
  function mensagem() {
    window.location.reload()
    props.setExcluir(false)
  }

  return (
    <Tela onClick={mensagem}>
      <Card >
        <Title>{"Oh, no!"}</Title>
        <Description>{"Pokémon removido da sua Pokedéx"}</Description>
      </Card>
    </Tela>
  )
}
