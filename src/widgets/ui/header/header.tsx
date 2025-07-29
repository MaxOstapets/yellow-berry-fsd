import styles from "./header.module.css"
import { ProcessesList } from "@/entities/ui"

export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.hat}>
                <span>Flat 50% Off On Grocery Shop.</span>
                <ul className={styles.hatList}>
                    <li>Help?</li>
                    <li>Track Order</li>
                    <li>Language</li>
                    <li>Currency</li>
                </ul>
            </section>
            <section className={styles.processes}>
                <div className={styles.logo}>
                    <img src="./images/logo.png" alt="logo" className={styles.logoIcon} />
                    <div className={styles.title}>
                        <p className={styles.yellow}>Yellow</p>
                        <p className={styles.berry}>Berry</p>
                    </div>
                </div>
                <div className={styles.vegetables}>
                    <div className={styles.specie}>Vegetables</div>
                    <input type="text" placeholder="Search products..." className={styles.product} />
                    <img src="./images/searchIcon.png" alt="" className={styles.search} />
                </div>
                <ProcessesList />
            </section>
            <section className={styles.bottom}>
                <div className={styles.section}>
                    <img src="./images/cubesIcon.png" alt="cubes" />
                    <ul className={styles.bottomList}>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Products</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li className={styles.bottomListItem}>
                            <img src="./images/securityIcon.png" alt="security" />
                            <p>Offers</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.location}>
                    <img src="./images/locationIcon.png" alt="location" />
                    <input type="text" className={styles.locationInput} placeholder="Search location" />
                </div>
            </section>
        </header>
    )
}