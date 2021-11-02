import type { NextPage } from "next";
import Image from "next/image";
import { Logo } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Logo />
      <Image src="/images/home.svg" alt="HomeCare" width="1100" height="1100" />
    </>
  );
};

export default Home;
