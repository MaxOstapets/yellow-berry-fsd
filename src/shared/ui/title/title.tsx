import styles from "./title.module.css"

interface ITitle {
    mainText: string,
    individualText: string,
    secondaryText: string,
    alignItems?: string,
    width?: string,
}

export const Title: React.FC<ITitle> = ({ mainText, individualText, secondaryText, alignItems, width }) => {
    return (
        <div className={styles.title} style={{ alignItems: `${alignItems}`, width: `${width}` }}>
            <span className={styles.mainText}>{mainText}<p className={styles.individualText}>{individualText}</p></span>
            <p className={styles.secondaryText}>{secondaryText}</p>
        </div>
    )
}