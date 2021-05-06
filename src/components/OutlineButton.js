import styles from "./OutlineButton.module.css"


function OutlineButton({ label }) {
    return (
        <div className={styles.button}>
            {label}
        </div>
    )
}

export default OutlineButton
