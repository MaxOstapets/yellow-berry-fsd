import styles from "./header-bottom-list-item.module.css"

interface IList {
    core: string,
    src: string | boolean
}

export const HeaderBottomListItem: React.FC<IList> = ({ core, src }) => {
    return (
        src ?
            <li className={styles.bottomListItem}>{core}</li>
            :
            <li className={styles.bottomListItem}>
                <img src="./images/securityIcon.png" alt="security" />
                <p>{core}</p>
            </li>
    )
}