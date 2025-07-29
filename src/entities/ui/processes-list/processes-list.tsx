import { ProcessesItem } from "@/shared/ui"
import styles from "./processes-list.module.css"
import { data } from "./processes-list.data"

export const ProcessesList = () => {
    return (
        <div className={styles.iconList}>
            {data.map((el) => <ProcessesItem src={el.src} bottomLine={el.bottomLine} count={el.count} alt={el.alt} number={el.number} upLine={el.upLine} key={el.alt} />)}
        </div>
    )
}