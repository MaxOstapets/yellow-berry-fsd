import styles from "./product-images-list.module.css"
import { data } from "./product-images-list.data"

export const ProductImagesList = () => {
    return (
        <ul className={styles.list}>
            {data.map((el) =>
                <li className={styles.item} key={el.src}>
                    <img src={el.src} alt="list image" className={styles.img} />
                    <div className={styles.descriptor}>
                        <p className={styles.date}>{el.date} - organic</p>
                        <span className={styles.info}>{el.info}</span>
                    </div>
                </li>
            )}
        </ul>
    )
}