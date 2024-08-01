import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer>
            <div className={styles.upperBlock}>
                <h2 className={styles.title}>Учитесь в любое время и в любом месте</h2>
                <Image src='/download.png' alt='' className={styles.download} width={315} height={45}/>
                <div className={styles.bottomPictures}>
                    <Image src='/books.svg' alt='' className={styles.books} width={111} height={64}/>
                    <Image src='/phone.svg' alt='' className={styles.phone} width={89} height={141}/>
                    <Image src='/ellipse.svg' alt='' className={styles.ellipse} width={579} height={336}/>
                    <Image src='/notebook.svg' alt='' className={styles.notebook} width={114} height={52}/>
                </div>
                
            </div>

            <div className={styles.bottomBlock}>
                <div className={styles.blur}></div>
                <div className={styles.section}>
                    <h3>Приложение</h3>
                    <ul>
                        <li>КыргызApp для Android</li>
                        <li>КыргызApp для iOS</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Помощь и поддержка</h3>
                    <ul>
                        <li>Справочный центр</li>
                        <li>Связь с нами</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Условия и конфиденциальность</h3>
                    <ul>
                        <li>Правила сообщества</li>
                        <li>Конфиденциальность</li>
                    </ul>
                </div>
                <div className={styles.imageSection}>
                    <Image src="/phone.svg" alt="Phone image 1" width={89} height={141}/>
                    <Image src="/phone2.svg" alt="Phone image 2" width={84} height={130}/>
                </div>
            </div>
        </footer>
    )
}