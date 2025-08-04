import styles from "./footer-directory-list.module.css"

interface IFooterFirectoryList {
    title: string
    item: string[]
}

export const FooterDirectoryList: React.FC<IFooterFirectoryList> = ({ title, item }) => {
    return (
        <div className={styles.directory}>
            <p className={styles.directoryTitle}>{title}:</p>
            <ul className={styles.directoryList}>
                {item.map((el) => <li key={el} className={styles.directoryItem}>{el}</li>)}
            </ul>
        </div>
    )
}