import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./aboutMe/page";
// import { MyProvider } from "./myProvider";

export default function Home() {
  return (
    <>
      <AboutMe />
    </>
  );
}
