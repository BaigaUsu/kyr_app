import Image from "next/image";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import styles from './Section_5.module.scss'

export default function Section_5() {
    return (
        <section className={styles.section}>
            <div className={styles.description}>
                <Title className={styles.title}>Индивидуальное обучение</Title>
                <Description className={styles.text}>
                    Наши уроки объединяют в себе умные алгоритмы искусственного интеллекта и 
                    новейшие достижения лингвистики. Сложность и темп обучения подбираются 
                    для каждого пользователя индивидуально!
                </Description>
            </div>

            <div className={styles.image}>
                <div className={styles.blur}></div>
                <Image src='/picture5.svg' alt="group" className={styles.picture} width={646} height={399}/>
            </div>
        </section>
    )
}