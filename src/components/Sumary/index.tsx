import { Container } from "./styles";
import ImgIncome from "../../assets/income.svg";
import ImgOutcome from "../../assets/outcome.svg";
import ImgTotal from "../../assets/total.svg";



export function Sumary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ImgIncome} alt="Entrada" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={ImgOutcome} alt="Saida" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={ImgTotal} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}