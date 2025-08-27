import styles from "./category.module.css"
import { Sidebar } from "@/entities/ui"

export const CategoryPage = () => {
    return (
        <main className={styles.main}>
            <Sidebar />
        </main>
    )
}