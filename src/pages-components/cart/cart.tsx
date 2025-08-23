import { PrimaryButton, Title, ProductCard } from "@/shared/ui"
import { Cart } from "@/widgets/ui"
import { SummaryForm } from "@/processes/ui"
import styles from "./cart.module.css"
import { newArrivals } from "./cart.data"

export const CartPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.cart}>
                <SummaryForm />
                <section className={styles.section}>
                    <Cart />
                    <PrimaryButton core="Submit" />
                </section>
            </div>
            <div className={styles.newArrivals}>
                <Title mainText="New" individualText="Arrivals" secondaryText="Browse The Collection of Top Products" alignItems="center" />
                <div className={styles.cards}>
                    {newArrivals.map((el) =>
                        <ProductCard
                            price={el.price}
                            title={el.title}
                            specie={el.specie}
                            unit={el.unit}
                            src={el.src}
                            freshness={el.freshness}
                            discount={el.discount}
                            measurement={el.measurement}
                            key={el.title}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}