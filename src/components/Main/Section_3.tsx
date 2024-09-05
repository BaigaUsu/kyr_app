import Image from "next/image";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import styles from './Section_3.module.scss'

export default function Section_3() {
    return (
        <section className={styles.section}>
            <div className={styles.description}>
                <Title className={styles.title}>Научный подход</Title>
                <Description className={styles.text}>
                    Уникальный метод обучения и увлекательные материалы: 
                    исследования показывают, что наши курсы эффективно развивают навыки 
                    чтения, письма, понимания на слух и устной речи!
                </Description>
            </div>

            <div className={styles.image}>
                <div className={styles.blur}></div>
                <Image src='/picture3.svg' alt="group" className={styles.picture} width={675} height={359}/>
            </div>
            
        </section>
    )
}