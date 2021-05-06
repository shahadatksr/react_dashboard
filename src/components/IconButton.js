import styles from "./IconButton.module.css"

function IconButton({ label, icon, isActive }) {
    return (
        <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
            <img className={styles.icon} src={icon} alt="" />
            {label}
        </div>
    )
}

export default IconButton
