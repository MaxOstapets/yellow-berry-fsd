import styles from "./timer.module.css"

export const Timer = () => {
    return (
        <div className={styles.timer}>
            <span>28 days</span>
            <span>3 h</span>
            <span>:</span>
            <span>25 min</span>
            <span>:</span>
            <span>10 s</span>
        </div>
    )
}