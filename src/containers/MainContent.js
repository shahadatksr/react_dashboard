import React from 'react'
import FlatButton from '../components/FlatButton'
import styles from "./MainContent.module.css"

function MainContent() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Hello, Alexis</h1>
                <span> Start your Mindall journey today, you're on the way to reach your goals!</span>
            </div>
            <div className={styles.container}></div>
            <div className={styles.banner}>
                <span>Want to have a bonus one-month free subscription?<br /> Now refer 3 friends to join Mindmail. you can get it!</span>
                <FlatButton label="Refer Friend" />
            </div>
        </div>
    )
}

export default MainContent
