import { FooterColumnListItem } from "@/shared/ui";
import styles from "./footer-column.module.css"

interface IFooterColumn {
    item: string[] | { core: string, src: string }[];
    title: string;
}

export const FooterColumn: React.FC<IFooterColumn> = ({ item, title }) => {
    return (
        <div className={styles.column}>
            <span className={styles.title}>{title}</span>
            <ul className={styles.list}>
                {item.map((el, index) => (
                    <FooterColumnListItem item={el} key={index} />
                ))}
            </ul>
        </div>
    )
}