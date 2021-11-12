import type { NextPage } from "next";
import { Header } from "../../components/Header";
import { CaregiversListWrapper } from "../styles/CaregiversList";

const Caregivers: NextPage = () => {
  return (
    <CaregiversListWrapper>
      <Header />
    </CaregiversListWrapper>
  );
};

export default Caregivers;
