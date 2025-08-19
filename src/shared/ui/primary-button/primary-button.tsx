import styles from "./primary-button.module.css"

interface IPrimaryButton {
    core: string
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ core }) => {
    return <button className={styles.button} type="button">{core}</button>
}