import styles from "./faq.module.css"
import { Title } from "@/shared/ui"
import { FaqList } from "@/entities/ui"

export const FaqPage = () => {
    return (
        <main className={styles.main}>
            <Title mainText="Frequently asked" individualText="questions" secondaryText="Customer service management" alignItems="center" />
            <section className={styles.section}>
                <img src="./images/girlWithACart.svg" alt="person" />
                <FaqList />
            </section>
        </main>
    )
}