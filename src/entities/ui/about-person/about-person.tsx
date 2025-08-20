import styles from "./about-person.module.css"

interface IAboutPerson {
    src: string
    personName: string
    post: string
}

export const AboutPerson: React.FC<IAboutPerson> = ({ src, personName, post }) => {
    return (
        <section className={styles.section}>
            <span className={styles.testimonials}>Testimonials</span>
            <div className={styles.descriptor}>
                <img src={src} alt="person" />
                <div className={styles.info}>
                    <span className={styles.name}>{personName}</span>
                    <span className={styles.post}>({post})</span>
                    <span className={styles.aboutPerson}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis."</span>
                </div>
            </div>
        </section>
    )
}