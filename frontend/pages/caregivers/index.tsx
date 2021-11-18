import type { NextPage } from "next";
import { Header, MainTitle } from "../../components";
import { CaregiversWrapper } from "../styles/CaregiversList";

const Caregivers: NextPage = () => {
  return (
    <CaregiversWrapper>
      <Header />
      <MainTitle title="Estes são os cuidadores disponíveis." showFilters />
    </CaregiversWrapper>
  );
};

export default Caregivers;
