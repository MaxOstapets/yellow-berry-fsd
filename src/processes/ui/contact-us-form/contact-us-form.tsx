import { PrimaryInput, PrimaryButton } from "@/shared/ui"
import styles from "./contact-us-form.module.css"
import { data } from "./contact-us-form.data"

export const ContactUsForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                {data.map((el) => <PrimaryInput placeholder={el.placeholder} key={el.placeholder} height={el.height} />)}
            </div>
            <PrimaryButton core="Buy now" />
        </form>
    )
} 