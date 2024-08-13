import Image from "next/image";
import Button from "../Button/Button";
import { MainTitle } from "../Title/Title";
import styles from './Section_1.module.scss'

export default function Section_1() {
    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <MainTitle className={styles.mainTitle}>Изучайте кыргызский весело  с <span>KyrgyzApp</span></MainTitle>
                <Image src='/download.png' alt='' className={styles.image}width={300} height={300}/>
            </div>
            <div className={styles.picture}>
                <div className={styles.blur1}></div>
                <div className={styles.blur2}></div>
                <Image src='/OBJECTS.svg' alt="Objects" className={styles.pictureMain} width={824} height={824} />
                <Image src='/Frame.svg' alt="Frame" className={styles.pictureBars} width={216} height={276} />
            </div>
        </section>
    )
}