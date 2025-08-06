import styles from "./product-card.module.css"

interface IProductCard {
    specie: string,
    title: string,
    price?: number,
    newPrice?: number,
    oldPrice?: number,
    unit: number,
    src: string,
    freshness: boolean,
    discount: boolean,
    measurement: string
}

export const ProductCard: React.FC<IProductCard> = ({ specie, title, price, unit, src, freshness, discount, oldPrice, newPrice, measurement }) => {
    return (
        <div className={styles.productCard}>
            {freshness ?
                <div className={styles.imageSection}>
                    <img src={src} alt="product" className={styles.productImage} />
                    <span className={styles.new}>NEW</span>
                </div>
                :
                <img src={src} alt="product" className={styles.productImage} />
            }
            <div className={styles.productDescriptor}>
                <div className={styles.upSection}>
                    <p className={styles.specie}>{specie}</p>
                    <div className={styles.stars}>
                        <img src="./images/fillStar.svg" alt="star" className={styles.star} />
                        <img src="./images/fillStar.svg" alt="star" className={styles.star} />
                        <img src="./images/fillStar.svg" alt="star" className={styles.star} />
                        <img src="./images/fillStar.svg" alt="star" className={styles.star} />
                        <img src="./images/fillStar.svg" alt="star" className={styles.star} />
                    </div>
                </div>
                <span className={styles.productTitle}>{title}</span>
                <div className={styles.downSection}>
                    {discount
                        ?
                        <div className={styles.priceSection}>
                            <p className={styles.price}>{newPrice}$</p>
                            <p className={styles.oldPrice}>{oldPrice}$</p>
                        </div>
                        :
                        <p className={styles.price}>{price}$</p>
                    }
                    <span className={styles.unit}>
                        <p>{unit}</p>
                        <p>{measurement}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}