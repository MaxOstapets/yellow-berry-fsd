import styles from "./register.module.css"
import { RegisterForm } from "@/processes/ui"

export const RegisterPage = () => {
    return (
        <main className={styles.main}>
            <RegisterForm />
        </main>
    )
} 