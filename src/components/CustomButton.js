import star from "../icons/star.svg"
import styles from "./CustomButton.module.css"

function CustomButton({ value, label }) {
    var str = label.split(" ");
    return (
        <div className={styles.main}>
            <div className={styles.icon}><img src={star} alt="" /></div>
            <span>{value}</span>
            <div>{str[0]} <br /> {str[1]}</div>
        </div>
    )
}

export default CustomButton
