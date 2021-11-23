import type { NextPage } from "next";
import { CaregiverForm, Header, MainTitle } from "../../components";
import { MainContainer } from "../../styles/Pages/Commons";

const NewCaregivers: NextPage = () => {
  return (
    <MainContainer>
      <Header />
      <MainTitle
        title="Cadastre-se na nossa plataforma para divulgar o seu trabalho."
        subtitle="O primeiro passo é preencher este formulário."
      />
      <CaregiverForm />
    </MainContainer>
  );
};

export default NewCaregivers;
