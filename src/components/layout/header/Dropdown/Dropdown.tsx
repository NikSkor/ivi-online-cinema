import { FC, useEffect, useState } from 'react'
import styles from './Dropdown.module.scss'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import ProfileContent from './ProfileContent/ProfileContent'
type DropdownProps = {
	isNotificationsOpen: boolean,
	isProfileOpen: boolean,
	setIsProfileOpen: Function,
	setIsNotificationsOpen: Function

}
const Dropdown: FC<DropdownProps> = ({ isNotificationsOpen, isProfileOpen, setIsProfileOpen, setIsNotificationsOpen }) => {

	return (
		<div
			className={`${styles.dropdown} ${isNotificationsOpen || isProfileOpen ? `${styles.dropdownOpen}` : ''}`}
			style={isProfileOpen ? { height: "300px" } : isNotificationsOpen ? { height: "260px" } : {}}
		>
			<div className={styles.dropdownBody}>
				{isNotificationsOpen ? <NotificationsContent /> : null}
				{isProfileOpen ? <ProfileContent /> : null}
			</div>

		</div>
	)
}

export default Dropdown