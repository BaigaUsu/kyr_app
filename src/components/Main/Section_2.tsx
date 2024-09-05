import Image from "next/image";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import styles from './Section_2.module.scss'

export default function Section_2() {
    return (
        <section className={styles.section}>
            <div className={styles.image}>
                <div className={styles.blur}></div>
                <Image src='/Group 794.svg' alt="group" className={styles.picture} width={656.3} height={383.7}/>
            </div>

            <div className={styles.description}>
                <Title className={styles.title}>Бесплатно. Весело. Эффективно.</Title>
                <Description>
                    Учиться с KyrgyzApp весело и интересно. 
                    Зарабатывайте очки за правильные ответы, открывайте новые материалы и развивайте навыки разговорной речи. 
                    Наши короткие уроки действительно работают, и мы можем это доказать.
                </Description>
            </div>
        </section>
    )
}