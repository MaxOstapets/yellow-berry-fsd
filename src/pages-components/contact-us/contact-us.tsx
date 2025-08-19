import { ContactUsForm } from "@/processes/ui"
import { Title } from "@/shared/ui"
import styles from "./contact-us.module.css"

export const ContactUsPage = () => {
    return (
        <main className={styles.main}>
            <Title
                mainText="Get In"
                individualText="Touch"
                secondaryText="Please select a topic below related to you inquiry. If you don't fint what you need, fill out our contact form."
                alignItems="center"
                width="400px"
            />
            <section className={styles.container}>
                <ContactUsForm />
                <img src="./images/map.svg" alt="map" />
            </section>
        </main>
    )
}