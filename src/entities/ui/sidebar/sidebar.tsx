import styles from "./sidebar.module.css"
import { category, weight, colors, tags } from "./sidebar.data"

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <section className={`${styles.category} ${styles.section}`}>
                <span className={styles.title}>Category</span>
                <ul className={styles.checkList}>
                    {category.map((el) =>
                        <li className={styles.checkItem}>
                            <input type="checkbox" name="categoryCheck" id="categoryCheck" className={styles.checkbox} />
                            <label htmlFor="categoryCheck" className={styles.checkLabel}>{el}</label>
                        </li>
                    )}
                </ul>
            </section>
            <section className={`${styles.weight} ${styles.section}`}>
                <span className={styles.title}>Weight</span>
                <ul className={styles.checkList}>
                    {weight.map((el) =>
                        <li className={styles.checkItem}>
                            <input type="checkbox" name="weightCheck" id="weightCheck" className={styles.checkbox} />
                            <label htmlFor="weightCheck" className={styles.checkLabel}>{el}</label>
                        </li>
                    )}
                </ul>
            </section>
            <section className={`${styles.color} ${styles.section}`}>
                <span className={styles.title}>Color</span>
                <ul className={styles.colorsList}>
                    {colors.map((el) => <li className={styles.colorItem} style={{ background: `${el}` }}></li>)}
                </ul>
            </section>
            <section className={`${styles.price} ${styles.section}`}>
                <span className={styles.title}>Price</span>
                <div className={styles.priceBox}>
                    <div className={styles.priceBorder}>$130 - $250</div>
                    <input type="range" className={styles.priceRange} />
                </div>
            </section>
            <section className={`${styles.tags} ${styles.section}`}>
                <span className={styles.title}>Tags</span>
                <ul className={styles.tagsList}>
                    {tags.map((el) => <li className={styles.tag}>{el}</li>)}
                </ul>
            </section>
        </div>
    )
}