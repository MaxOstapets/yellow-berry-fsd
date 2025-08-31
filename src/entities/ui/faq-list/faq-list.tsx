"use client"
import styles from "./faq-list.module.css"
import { useState } from "react"
import { data } from "./faq-list.data"

export const FaqList = () => {
    const [openIndexes, setOpenIndexes] = useState(Array(data.length).fill(false))
    const toggleHandler = (index: number) => { setOpenIndexes(prev => prev.map((isOpen, i) => i === index ? !isOpen : isOpen)) }

    return (
        <ul className={styles.list}>
            {data.map((el, index) =>
                <li className={styles.item} onClick={() => toggleHandler(index)} key={index}>
                    <div className={styles.default}>
                        <span>{el}</span>
                        <span>{openIndexes[index] ? "-" : "+"}</span>
                    </div>
                    {openIndexes[index] && (
                        <span className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur impedit, officiis blanditiis tempore cumque eveniet, cum nemo quisquam et sit magnam aperiam nulla consequuntur culpa dolorem enim quis. Libero.
                        </span>
                    )}
                </li>
            )}
        </ul>
    )
}
