import styles from "./title.module.css"

interface ITitle {
    mainText: string,
    individualText: string,
    secondaryText: string
}

export const Title: React.FC<ITitle> = ({ mainText, individualText, secondaryText }) => {
    return (
        <div className={styles.title}>
            <span className={styles.mainText}>{mainText}<p className={styles.individualText}>{individualText}</p></span>
            <p className={styles.secondaryText}>{secondaryText}</p>
        </div>
    )
}