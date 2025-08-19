import styles from "./insta-images-list.module.css"

const data = [
    "./images/cabbageDish.svg",
    "./images/backyardCouple.svg",
    "./images/backyardView.svg",
    "./images/tomatos.svg",
    "./images/vegetableBouquet.svg",
    "./images/marketWorker.svg"
]

export const InstaImagesList = () => {
    return (
        <div className={styles.images}>
            <span className={styles.insta}>#INSTA</span>
            <div className={styles.list}>
                {data.map((el) => <img src={el} alt="inst img" />)}
            </div>
        </div>
    )
}