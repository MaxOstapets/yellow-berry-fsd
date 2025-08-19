import styles from "./primary-input.module.css"

interface IPrimaryInput {
    placeholder: string,
    height: string | number
}

export const PrimaryInput: React.FC<IPrimaryInput> = ({ placeholder, height }) => {
    return <input type="text" className={styles.input} style={{ height: `${height}` }} placeholder={placeholder} />
}