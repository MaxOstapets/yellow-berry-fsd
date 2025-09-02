import styles from "./register-form.module.css"
import { Title, PrimaryInput, PrimaryButton } from "@/shared/ui"
import { inputs } from "./register-form.data"

export const RegisterForm = () => {
    return (
        <div className={styles.register}>
            <Title mainText="Register" secondaryText="Best place to buy and sell digital products" alignItems="center" />
            <form className={styles.form}>
                {inputs.map((el) => <PrimaryInput placeholder={el.placeholder} height="auto" label={el.label} key={el.label} />)}
            </form>
            <PrimaryButton core="Register" />
        </div>
    )
}