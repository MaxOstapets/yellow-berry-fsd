import styles from "./footer-column-list-item.module.css"

interface IProps {
    item: string | { core: string, src: string };
}

export const FooterColumnListItem: React.FC<IProps> = ({ item }) => {
    const val = typeof item === "string"
    return (
        <li className={styles.item}>
            {!val && <img src={item.src} className={styles.icon} />}
            <span>{val ? item : item.core}</span>
        </li>
    )
}