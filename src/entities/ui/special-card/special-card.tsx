import { ShopButton } from "@/shared/ui"
import styles from "./special-card.module.css"

interface ISpecialCard {
    src: string,
    specialTitle: string,
    specialSecondaryText: string,
    bgColor: string,
    bgImg: string
}

export const SpecialCard: React.FC<ISpecialCard> = ({ src, specialTitle, specialSecondaryText, bgColor, bgImg }) => {
    return (
        <div className={styles.specialCard} style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <img src={src} alt="product" className={styles.specialImg} />
            <div className={styles.specialDescriptor}>
                <span className={styles.specialTitle}>{specialTitle}</span>
                <p className={styles.specialSecondaryText}>{specialSecondaryText}</p>
                <ShopButton />
            </div>
        </div>
    )
}