import styles from "./download-button.module.css"

interface IDownloadButton {
    src: string,
    app: string
}

export const DownloadButton: React.FC<IDownloadButton> = ({ src, app }) => {
    return (
        <button className={styles.button}>
            <img className={styles.src} src={src} alt="google play" />
            <div className={styles.description}>
                <span className={styles.span}>Get it on</span>
                <p className={styles.app}>{app}</p>
            </div>
        </button>
    )
}