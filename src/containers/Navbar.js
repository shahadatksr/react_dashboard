import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import home from "../icons/home.svg"
import settings from "../icons/gear.svg"
import pray from "../icons/pray.svg"
import chakra from "../icons/chakra.svg"
import picture from "../icons/picture.svg"
import logout from "../icons/logout.svg"
import IconButton from '../components/IconButton'

function Navbar() {

    const [selected, setSelected] = useState(0)


    const navlinks = [
        { label: "Home", icon: home },
        { label: "Affirmation", icon: chakra },
        { label: "Grattitude", icon: pray },
        { label: "Visualization", icon: picture },
        { label: "Settings", icon: settings },
    ]

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                {navlinks.map((link, index) => (
                    <div key={index} onClick={() => setSelected(index)}>
                        <IconButton label={link.label} icon={link.icon} isActive={selected === index ? true : false} />
                    </div>
                )
                )}
            </div>
            <div className={styles.logout}>
                <IconButton label="Logout" icon={logout} />
            </div>
        </div>
    )
}

export default Navbar
