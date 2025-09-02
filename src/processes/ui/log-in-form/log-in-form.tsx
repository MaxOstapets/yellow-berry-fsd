import styles from "./log-in-form.module.css"
import { Title, PrimaryInput, PrimaryButton } from "@/shared/ui"
import { inputs } from "./log-in-form.data"

export const LogInForm = () => {
    return (
        <div className={styles.logIn}>
            <Title mainText="Log" individualText="In" secondaryText="Best place to buy and sell digital products" alignItems="center" />
            <form className={styles.form}>
                <div className={styles.inputs}>
                    {inputs.map((el) => <PrimaryInput placeholder={el.placeholder} label={el.label} height="auto" key={el.label} />)}
                </div>
                <span className={styles.forgotPassword}>Forgot password?</span>
                <div className={styles.bottom}>
                    <PrimaryButton core="Log in" />
                    <span className={styles.register}>Register</span>
                </div>
            </form>
        </div>
    )
}