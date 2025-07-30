import { HeaderProcessesItem } from "@/shared/ui"
import styles from "./header-processes-list.module.css"
import { data } from "./header-processes-list.data"

export const HeaderProcessesList = () => {
    return (
        <div className={styles.iconList}>
            {data.map((el) => <HeaderProcessesItem src={el.src} bottomLine={el.bottomLine} count={el.count} alt={el.alt} number={el.number} upLine={el.upLine} key={el.alt} />)}
        </div>
    )
}