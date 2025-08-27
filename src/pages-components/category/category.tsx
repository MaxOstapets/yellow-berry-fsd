import styles from "./category.module.css"
import { Sidebar } from "@/widgets/ui"
import { ProductCard } from "@/shared/ui"
import { products } from "./category.data"

export const CategoryPage = () => {
    return (
        <main className={styles.main}>
            <Sidebar />
            <div className={styles.products}>
                <div className={styles.cards}>
                    {products.map((el) =>
                        <ProductCard
                            specie={el.specie}
                            title={el.title}
                            unit={el.unit}
                            src={el.src}
                            freshness={el.freshness}
                            discount={el.discount}
                            measurement={el.measurement}
                            newPrice={el.newPrice}
                            oldPrice={el.oldPrice}
                            price={el.price}
                            key={el.title}
                        />
                    )}
                </div>
                <div className={styles.bottom}>
                    <span className={styles.count}>Showing 1-12 of 21 item(s)</span>
                    <div className={styles.pages}>
                        <button className={`${styles.currentPage} ${styles.page}`}>1</button>
                        <button className={styles.page}>2</button>
                        <button className={styles.page}>3</button>
                        <button className={styles.page}>4</button>
                        <button className={`${styles.next} ${styles.page}`}>Next</button>
                    </div>
                </div>
            </div>
        </main>
    )
}