import FlatButton from '../components/FlatButton'
import OutlineButton from '../components/OutlineButton'
import styles from "./Sidebar.module.css"
import Progress from '../components/Progress'
import CustomButton from '../components/CustomButton'


function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.tittle}>Your Goal Progress</div>
            <div className={styles.top}>
                <div className={styles.buttons}>
                    <OutlineButton label="Work" />
                    <FlatButton label="Relationship" />
                    <OutlineButton label="Health" />
                </div>
                <hr />
                <Progress label="I want to meet the love of my life." value={21} />
                <Progress label="I want to get married." value={21} />
            </div>
            <div className={styles.tittle}>Affirmation</div>
            <div className={styles.middle}>
                <CustomButton value={2} label="Affirmations Written" />
                <CustomButton value={2} label="Negativity Abandoned" />
                <CustomButton value={2} label="Goals Created" />
                <CustomButton value={24} label="Minutes Practiced" />
            </div>
            <div className={styles.bottom}>
                <div>
                    <div className={styles.tittle}>Gratitude</div>
                    <div className={styles.middle}>
                        <CustomButton value={1} label="Grattitude Excercised" />
                        <CustomButton value={2} label="Photos Uploaded" />
                        <CustomButton value={5} label="Videos Uploaded" />
                    </div>
                </div>
                <div>
                    <div className={styles.tittle}>Visualization</div>
                    <div className={styles.end}>
                        <CustomButton value={1} label="Visualization Excercised" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
