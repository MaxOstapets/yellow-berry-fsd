import { MoreInfoItem } from "@/shared/ui";
import styles from "./more-info-list.module.css"
import { data } from "./more-info-list.data";

export const MoreInfoList = () => {
    return (
        <ul className={styles.list}>
            {data.map((el) => <MoreInfoItem title={el.title} src={el.src} secondaryText={el.secondaryText} key={el.title} />)}
        </ul>
    )
}