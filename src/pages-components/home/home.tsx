import styles from "./home.module.css"
import { ShopButton } from "@/shared/ui"
import { CategoriesList } from "@/entities/ui"

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <div className={styles.descriptor}>
                    <span className={styles.discount}>Flat 30% Off</span>
                    <div className={styles.shopNow}>
                        <span className={styles.core}>Explore <p className={styles.healthy}>Healthy</p> & Fresh Fruits</span>
                        <ShopButton />
                    </div>
                </div>
                <img src="./images/fruits.png" alt="fruits" />
            </section>
            <section className={styles.categories}>
                <div className={styles.categoryImage}>
                    <img src="./images/category.svg" alt="category" />
                    <span className={styles.categoryDiscount}>50% Off</span>
                </div>
                <CategoriesList />
            </section>
        </main>
    )
}