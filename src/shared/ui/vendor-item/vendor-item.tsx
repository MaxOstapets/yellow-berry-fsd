import styles from "./vendor-item.module.css"

interface IVendorItem {
    title: string
    sales: number
    fruits: number
    vegetables: number
    snacks: number,
    individual: boolean
}

export const VendorItem: React.FC<IVendorItem> = ({ title, sales, fruits, vegetables, snacks, individual }) => {
    return (
        <li className={styles.item}>
            <div className={styles.descriptor}>
                {individual ? <span className={styles.individual}>{title}</span> : <span className={styles.title}>{title}</span>}
                <p className={styles.sales}>Sales - {sales}</p>
            </div>
            <span className={styles.counts}>Fruits ({fruits}) | Vegetables ({vegetables}) | Snacks ({snacks})</span>
        </li>
    )
}