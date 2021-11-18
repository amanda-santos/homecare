import type { NextPage } from "next";
import { Header, MainTitle } from "../../components";
import { CaregiversWrapper } from "../styles/CaregiversList";

const NewCaregivers: NextPage = () => {
  return (
    <CaregiversWrapper>
      <Header />
      <MainTitle
        title="Cadastre-se na nossa plataforma para divulgar o seu trabalho."
        subtitle="O primeiro passo é preencher este formulário."
      />
    </CaregiversWrapper>
  );
};

export default NewCaregivers;
