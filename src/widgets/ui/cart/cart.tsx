import styles from "./cart.module.css"
import { CartItem } from "@/entities/ui"
import { cart } from "./cart.data"

export const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.hat}>
                <span className={styles.title}>Product</span>
                <ul className={styles.titlesList}>
                    <li className={styles.titlesListItem}>Price</li>
                    <li className={styles.titlesListItem}>Quality</li>
                    <li className={styles.titlesListItem}>Total</li>
                </ul>
            </div>
            <div className={styles.products}>
                {cart.map((el) => <CartItem title={el.title} price={el.price} key={el.title} />)}
            </div>
        </div>
    )
}