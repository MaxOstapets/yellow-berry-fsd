import styles from "./header-hat-list.module.css"
import { data } from "./header-hat-list.data"

export const HeaderHatList = () => {
    return (
        <ul className={styles.hatList}>
            {data.map((el) => <li key={el}>{el}</li>)}
        </ul>
    )
}