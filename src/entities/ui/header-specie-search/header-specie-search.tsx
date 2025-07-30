import styles from "./header-specie-search.module.css"

export const HeaderSpecieSearch = () => {
    return (
        <div className={styles.vegetables}>
            <div className={styles.specie}>Vegetables</div>
            <input type="text" placeholder="Search products..." className={styles.product} />
            <img src="./images/searchIcon.png" alt="" className={styles.search} />
        </div>
    )
}