import styles from "./primary-input.module.css"

interface IPrimaryInput {
    placeholder: string,
    height: string | number,
    id?: string,
    name?: string,
    label?: string,
}

export const PrimaryInput: React.FC<IPrimaryInput> = ({ placeholder, height, id, name, label }) => {
    return (
        <div className={styles.inputSection}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                type="text"
                className={styles.input}
                style={{ height: `${height}` }}
                placeholder={placeholder}
                id={id}
                name={name}
            />
        </div>
    )
}