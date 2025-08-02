import styles from "./footer.module.css"
import { brandsDirectory, columns } from "./footer.data"
import { Logo } from "@/shared/ui"
import { FooterColumn } from "@/entities/ui"

export const Footer = () => {
    return (
        <footer>
            <section>
                <span>Brands Directory</span>
                <div>
                    {brandsDirectory.map((el) =>
                        <div>
                            <p>{el.title}:</p>
                            <ul>
                                {el.items.map((el) => <li>{el}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <div>
                    <Logo />
                    <span>BlueBerry is the biggest market of grocery products. Get your daily needs from our store.</span>
                    <div>
                        <button>
                            <img src="./images/googlePlay.svg" alt="google play" />
                            <div>
                                <span>Get it on</span>
                                <p>Google Play</p>
                            </div>
                        </button>
                        <button>
                            <img src="./images/appleStore.svg" alt="google play" />
                            <div>
                                <span>Get it on</span>
                                <p>Apple Store</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    {columns.map((el) => <FooterColumn item={el.items} title={el.title} key={el.title} />)}
                </div>
            </section>
        </footer>
    )
}