import { VendorItem } from "@/shared/ui"
import { data } from "./vendors-list.data"
import styles from "./vendors-list.module.css"

export const VendorsList = () => {
    return (
        <ul className={styles.list}>
            {data.map((el) =>
                <VendorItem
                    title={el.title}
                    sales={el.sales}
                    fruits={el.fruits}
                    vegetables={el.vegetables}
                    snacks={el.snacks}
                    individual={el.individual}
                    key={el.title}
                />
            )}
        </ul>
    )
}