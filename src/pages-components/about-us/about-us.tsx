import styles from "./about-us.module.css"
import { Title } from "@/shared/ui"
import { blueBerryList, members } from "./about-us.data"
import { MoreInfoList, AboutPerson } from "@/entities/ui"

export const AboutUsPage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.blueBerry}>
                <img src="./images/twistedShape.png" alt="shape" />
                <div className={styles.brand}>
                    <Title mainText="About the" individualText="BlueBerry" secondaryText="Farm-fresh Goodness, just a click Away" alignItems="start" />
                    <p className={styles.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</p>
                    <p className={styles.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</p>
                    <ul className={styles.countList}>
                        {blueBerryList.map((el) =>
                            <li className={styles.item} key={el.itemDescriptor}>
                                <span className={styles.count}>{el.count} +</span>
                                <p className={styles.itemDescriptor}>{el.itemDescriptor}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
            <section className={styles.services}>
                <Title mainText="Our" individualText="Services" secondaryText="Customer service should not be a department. It should be the entire company" alignItems="center" width="340px" />
                <MoreInfoList />
            </section>
            <AboutPerson personName="Isabella Oliver" post="Manager" src="./images/isabellaOliver.svg" />
            <section className={styles.team}>
                <Title mainText="Our" individualText="Team" secondaryText="Meet out expert team members" alignItems="center" />
                <div className={styles.members}>
                    {members.map((el) =>
                        <div className={styles.teamMember} key={el.post}>
                            <img src={el.src} alt="person" />
                            <div className={styles.person}>
                                <span className={styles.name}>{el.personName}</span>
                                <p className={styles.post}>{el.post}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}