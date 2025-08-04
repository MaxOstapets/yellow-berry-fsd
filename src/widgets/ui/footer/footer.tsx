import styles from "./footer.module.css"
import { brandsDirectory, columns, downloadButtons } from "./footer.data"
import { Logo, DownloadButton } from "@/shared/ui"
import { FooterColumn, FooterDirectoryList } from "@/entities/ui"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.brandsDirectories}>
                <span className={styles.directoriesTitle}>Brands Directory</span>
                <div className={styles.directories}>
                    {brandsDirectory.map((el) => <FooterDirectoryList key={el.title} title={el.title} item={el.items} />)}
                </div>
            </section>
            <section className={styles.middleSection}>
                <div className={styles.download}>
                    <Logo />
                    <span className={styles.descriptor}>BlueBerry is the biggest market of grocery products. Get your daily needs from our store.</span>
                    <div className={styles.buttons}>
                        {downloadButtons.map((el) => <DownloadButton key={el.app} app={el.app} src={el.src} />)}
                    </div>
                </div>
                <div className={styles.columns}>
                    {columns.map((el) => <FooterColumn item={el.items} title={el.title} key={el.title} />)}
                </div>
            </section>
            <section className={styles.bottomSection}>
                <span className={styles.copyright}>Copyright © 2024 <p className={styles.company}>Yellow Berry</p> all rights reserved</span>
                <div className={styles.rightSide}>
                    <img src="./images/payment.png" alt="payment" />
                    <img src="./images/scrollUpArrow.png" alt="scroll up" />
                </div>
            </section>
        </footer>
    )
}