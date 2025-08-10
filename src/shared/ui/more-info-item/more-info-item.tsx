import styles from "./more-info-item.module.css"

interface IMoreInfoItem {
    src: string,
    title: string,
    secondaryText: string
}

export const MoreInfoItem: React.FC<IMoreInfoItem> = ({ src, title, secondaryText }) => {
    return (
        <li className={styles.moreInfoItem}>
            <img src={src} alt="icon" />
            <div className={styles.descriptor}>
                <span className={styles.title}>{title}</span>
                <p className={styles.secondaryText}>{secondaryText}</p>
            </div>
        </li>
    )
}