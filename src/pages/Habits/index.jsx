import Input from "../../components/Global_Input";
import {
  Container,
  HabitsInfo,
  Header,
  InfoItem,
  Main,
  Overview,
} from "./habits.styles";

const Habits = () => {
  const list = ["Azul", "Vermelho", "Preto"];
  return (
    <Container>
      <h1>Hábitos</h1>
      <Overview>
        <Header>Resumo</Header>
        <HabitsInfo>
          <InfoItem>
            Você tem
            <p>999 hábitos</p>
          </InfoItem>
          <InfoItem>
            Você tem
            <p>999 hábitos conluídos</p>
          </InfoItem>
        </HabitsInfo>
      </Overview>
      <Main>
        {/* Criar sub-rotas */}

        <Input register={console.log} name="yata" list={list} />
        <Input register={console.log} name="yata" />
      </Main>
    </Container>
  );
};

export default Habits;
