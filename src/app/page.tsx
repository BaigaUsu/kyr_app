import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import Section_1 from "@/components/Main/Section_1";
import Section_2 from "@/components/Main/Section_2";
import Section_3 from "@/components/Main/Section_3";
import Section_4 from "@/components/Main/Section_4";
import Section_5 from "@/components/Main/Section_5";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Footer/>
    </main>
  );
}
