/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Logo } from "../components";
import { HomeButton } from "../components/HomeButton";
import { HomeWrapper, ButtonsWrapper, SideContent } from "./styles";

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <SideContent>
        <Logo />
        <h3>Encontre cuidadores familiares perto de você.</h3>
        <h5>O que deseja fazer?</h5>
        <ButtonsWrapper>
          <HomeButton title="Sou cuidador" icon="toolbox" color="secondary" />
          <HomeButton
            title="Encontre um cuidador"
            icon="heart"
            color="primary"
          />
        </ButtonsWrapper>
      </SideContent>
      <img src="/images/home.svg" alt="HomeCare" />
    </HomeWrapper>
  );
};

export default Home;
