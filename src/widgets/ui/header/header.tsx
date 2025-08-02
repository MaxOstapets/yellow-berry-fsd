import styles from "./header.module.css"
import { HeaderProcessesList, HeaderBottomList, HeaderLocationSearch, HeaderHatList, HeaderSpecieSearch } from "@/entities/ui"
import { Logo } from "@/shared/ui"

export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.hat}>
                <span>Flat 50% Off On Grocery Shop.</span>
                <HeaderHatList />
            </section>
            <section className={styles.processes}>
                <Logo />
                <HeaderSpecieSearch />
                <HeaderProcessesList />
            </section>
            <section className={styles.bottom}>
                <div className={styles.section}>
                    <img src="./images/cubesIcon.png" alt="cubes" />
                    <HeaderBottomList />
                </div>
                <HeaderLocationSearch />
            </section>
        </header>
    )
}