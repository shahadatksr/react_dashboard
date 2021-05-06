import styles from "./FlatButton.module.css"

function FlatButton({ label }) {
    return (
        <div className={styles.button}>
            {label}
        </div>
    )
}
export default FlatButton
