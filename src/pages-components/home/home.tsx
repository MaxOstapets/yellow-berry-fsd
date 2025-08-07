import styles from "./home.module.css"
import { ShopButton, ProductCard, Title } from "@/shared/ui"
import { CategoriesList, Timer, SpecialCard } from "@/entities/ui"
import { deals, special } from "./home.data"

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
            <section className={styles.deals}>
                <div className={styles.dealsHat}>
                    <Title mainText="Day of the" individualText="Deal" secondaryText="Don't wait. The time will never be just right." />
                    <Timer />
                </div>
                <div className={styles.cards}>
                    {deals.map((el) =>
                        <ProductCard
                            title={el.title}
                            specie={el.specie}
                            freshness={el.freshness}
                            discount={el.discount}
                            oldPrice={el.oldPrice}
                            newPrice={el.newPrice}
                            src={el.src}
                            unit={el.unit}
                            measurement={el.measurement}
                            key={el.title}
                            price={el.price}
                        />
                    )}
                </div>
            </section>
            <section className={styles.special}>
                {special.map((el) =>
                    <SpecialCard
                        key={el.specialTitle}
                        src={el.src}
                        specialTitle={el.specialTitle}
                        specialSecondaryText={el.specialSecondaryText}
                        bgColor={el.bgColor}
                        bgImg={el.bgImg}
                    />)}
            </section>
        </main>
    )
}