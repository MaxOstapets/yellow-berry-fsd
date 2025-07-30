import styles from "./header-logo.module.css"

export const HeaderLogo = () => {
    return (
        <div className={styles.logo}>
            <img src="./images/logo.png" alt="logo" className={styles.logoIcon} />
            <div className={styles.title}>
                <p className={styles.yellow}>Yellow</p>
                <p className={styles.berry}>Berry</p>
            </div>
        </div>
    )
}