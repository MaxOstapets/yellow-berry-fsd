import styles from "./header-processes-item.module.css"

interface IProcessesItem {
    src: string,
    upLine: string | boolean,
    bottomLine: string,
    count: boolean,
    number: number | boolean,
    alt: string
}

export const HeaderProcessesItem: React.FC<IProcessesItem> = ({ src, upLine, bottomLine, count, number, alt }) => {
    return (
        <div className={styles.item}>
            <img src={src} alt={alt} className={styles.listIcon} />
            {count ?
                <div className={styles.core}>
                    <span className={styles.upLine}><p className={styles.number}>{number}</p>items</span>
                    <p className={styles.bottomLine}>{bottomLine}</p>
                </div>
                :
                <div className={styles.core}>
                    <p className={styles.upLine}>{upLine}</p>
                    <p className={styles.bottomLine}>{bottomLine}</p>
                </div>
            }
        </div>
    )
}