import styles from "./cart-item.module.css"

interface ICartItem {
    title: string
    price: number
}

export const CartItem: React.FC<ICartItem> = ({ title, price }) => {
    return (
        <div className={styles.item}>
            <div className={styles.product}>
                <img src="./images/productInCart.svg" alt="product" />
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.price}>${price}</span>
                <div className={styles.quality}>
                    <button className={styles.operation}>-</button>
                    <p className={styles.count}>1</p>
                    <button className={styles.operation}>+</button>
                </div>
                <span className={styles.price}>${price}</span>
                <img src="./images/trash.png" alt="trash" className={styles.trash} />
            </div>
        </div>
    )
}