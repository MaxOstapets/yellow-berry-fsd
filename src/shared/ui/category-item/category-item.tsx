import styles from "./category-item.module.css"

interface ICategoryItem {
    src: string,
    category: string,
    count: number,
    bg: string
}

export const CategoryItem: React.FC<ICategoryItem> = ({ src, category, count, bg }) => {
    return (
        <li className={styles.categoryItem} style={{ background: `${bg}` }}>
            <img src={src} alt={category} />
            <div className={styles.categoryDescriptor}>
                <span className={styles.category}>{category}</span>
                <p className={styles.count}>{count} items</p>
            </div>
        </li>
    )
}