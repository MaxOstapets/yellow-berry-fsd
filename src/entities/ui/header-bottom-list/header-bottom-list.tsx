import styles from "./header-bottom-list.module.css"
import { HeaderBottomListItem } from "@/shared/ui"
import { data } from "./header-bottom-list.data"

export const HeaderBottomList = () => {
    return (
        <ul className={styles.bottomList}>
            {data.map((el) => <HeaderBottomListItem core={el.core} src={el.src} key={el.core} />)}
        </ul>
    )
}