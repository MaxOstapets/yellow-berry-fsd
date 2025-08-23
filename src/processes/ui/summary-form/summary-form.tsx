import styles from "./summary-form.module.css"
import { PrimaryInput } from "@/shared/ui"
import { inputs, list } from "./summary-from.data"

export const SummaryForm = () => {
    return (
        <form className={styles.form}>
            <section className={styles.top}>
                <span className={styles.summary}>Summary</span>
                <div className={styles.inputs}>
                    {inputs.map((el) =>
                        <div className={styles.input} key={el.id}>
                            <label className={styles.label}>{el.label}*</label>
                            <PrimaryInput placeholder={el.placeholder} height="auto" name={el.name} id={el.id} />
                        </div>
                    )}
                </div>
                <ul className={styles.list}>
                    {list.map((el) =>
                        <li className={styles.item} key={el.title}>
                            <span className={styles.title}>{el.title}</span>
                            {!el.individual ? <p className={styles.price}>${el.price}</p> : <p className={styles.individual}>{el.individualText}</p>}
                        </li>
                    )}
                </ul>
            </section>
            <div className={styles.bottom}>
                <span className={styles.totalAmount}>Total Amount</span>
                <span className={styles.totalPrice}>$80.00</span>
            </div>
        </form>
    )
}