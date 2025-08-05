import styles from "./categories-list.module.css"
import { CategoryItem } from "@/shared/ui"
import { data } from "./categories-list.data"

export const CategoriesList = () => {
    return (
        <ul className={styles.categoriesList}>
            {data.map((el) => <CategoryItem src={el.src} category={el.category} count={el.count} bg={el.bg} key={el.category} />)}
        </ul>
    )
}