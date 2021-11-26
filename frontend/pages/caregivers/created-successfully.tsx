import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "../../components";
import { CreatedSuccessfullyWrapper } from "../../styles/Pages/CreatedSuccessfully";

const CreatedSuccess: NextPage = () => {
  return (
    <CreatedSuccessfullyWrapper>
      <Image
        src="/images/check.svg"
        alt="Cadastro salvo!"
        height="120"
        width="120"
      />
      <h1>Cadastro salvo!</h1>
      <p>
        Tudo certo, seu cadastro está na nossa lista de cuidadores. <br />
        Agora é só ficar de olho no seu WhatsApp.
      </p>
      <a href={"/caregivers"}>
        <Button label="Acessar lista" color="secondary" icon="arrow-right" />
      </a>
    </CreatedSuccessfullyWrapper>
  );
};

export default CreatedSuccess;
