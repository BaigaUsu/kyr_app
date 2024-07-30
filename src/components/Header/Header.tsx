import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>KyrgyzApp</div>
            <div className={styles.lang}>
                <select>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="kg">Кыргызча</option>
                </select>
            </div>
        </header>
    )
}