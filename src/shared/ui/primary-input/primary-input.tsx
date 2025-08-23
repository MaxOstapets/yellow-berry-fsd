import styles from "./primary-input.module.css"

interface IPrimaryInput {
    placeholder: string,
    height: string | number,
    id?: string,
    name?: string
}

export const PrimaryInput: React.FC<IPrimaryInput> = ({ placeholder, height, id, name }) => {
    return <input type="text" className={styles.input} style={{ height: `${height}` }} placeholder={placeholder} id={id} name={name} />
}