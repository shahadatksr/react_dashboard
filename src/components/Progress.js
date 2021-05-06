import star from "../icons/star.svg"
import styles from "./Progress.module.css"

function Progress({ label, value }) {
    return (
        <div className={styles.progress}>
            <div className={styles.heading}>
                <img className={styles.star} src={star} alt="" />
                {label}
            </div>
            <div className={styles.bar}>
                <div className={styles.outer}>
                    <div className={styles.inner} style={{ width: value + "%" }} ></div>
                </div>
                {value}/100
            </div>
        </div>
    )
}

export default Progress
