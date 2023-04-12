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
			style={isProfileOpen ? { minHeight: "376px" } : isNotificationsOpen ? { minHeight: "344px" } : {}}
		>
			<div className={styles.dropdownBody}>
				{isNotificationsOpen ? <NotificationsContent /> : null}
				{isProfileOpen ? <ProfileContent /> : null}
			</div>

		</div>
	)
}

export default Dropdown