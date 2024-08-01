import Image from "next/image";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import styles from './Section_4.module.scss'

export default function Section_4() {
    return (
        <section className={styles.section}>
            <div className={styles.blur}></div>
            <Image src='/picture4.svg' alt="group" className={styles.picture} width={692} height={380}/>
            
            <div className={styles.description}>
                <Title className={styles.title}>Стимул к учёбе</Title>
                <Description className={styles.text}>
                    Игровой подход с забавными заданиями и напоминаниями от 
                    нашего талисмана — совёнка Duo помогает быстро превратить 
                    ежедневные занятия в привычку.
                </Description>
            </div>
        </section>
    )
}