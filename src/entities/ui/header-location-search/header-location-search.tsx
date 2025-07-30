import styles from "./header-location-search.module.css"

export const HeaderLocationSearch = () => {
    return (
        <div className={styles.location}>
            <img src="./images/locationIcon.png" alt="location" />
            <input type="text" className={styles.locationInput} placeholder="Search location" />
        </div>
    )
}