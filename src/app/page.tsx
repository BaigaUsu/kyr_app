import Image from "next/image";
import styles from "./page.module.css";
import { MainTitle, Title } from "@/components/Title/Title";
import { Description } from "@/components/Description/Description";
import Section_1 from "@/components/Main/Section_1";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section_1/>
    </main>
  );
}
