'use client'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { useState } from 'react';

export default function Footer() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <footer>
            {/* <div className={styles.upperBlock}>
                <h2 className={styles.title}>Учитесь в любое время и в любом месте</h2>
                <Image src='/download.png' alt='' className={styles.download} width={315} height={45}/>
                <div className={styles.bottomPictures}>
                    <Image src='/books.svg' alt='' className={styles.books} width={111} height={64}/>
                    <Image src='/phone.svg' alt='' className={styles.phone} width={89} height={141}/>
                    <Image src='/ellipse.svg' alt='' className={styles.ellipse} width={579} height={336}/>
                    <Image src='/notebook.svg' alt='' className={styles.notebook} width={114} height={52}/>
                </div>
            </div> */}

            <div className={styles.bottomBlock}>
                <div className={styles.blur}></div>
                <div className={styles.section}>
                    <h3 className={styles.title} onClick={() => toggleSection('app')}>Приложение</h3>
                    <ul className={`${styles.list} ${expandedSection === 'app' ? styles.expanded : ''}`}>
                        <li className={styles.listItem}>КыргызApp для Android</li>
                        <li className={styles.listItem}>КыргызApp для iOS</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title} onClick={() => toggleSection('support')}>Помощь и поддержка</h3>
                    <ul className={`${styles.list} ${expandedSection === 'support' ? styles.expanded : ''}`}>
                        <li className={styles.listItem}>Справочный центр</li>
                        <li className={styles.listItem}>Связь с нами</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title} onClick={() => toggleSection('FAQ')}>Условия и конфиденциальность</h3>
                    <ul className={`${styles.list} ${expandedSection === 'FAQ' ? styles.expanded : ''}`}>
                        <li className={styles.listItem}>Правила сообщества</li>
                        <li className={styles.listItem}>Конфиденциальность</li>
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