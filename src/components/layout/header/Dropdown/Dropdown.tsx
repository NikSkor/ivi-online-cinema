import { FC, useEffect, useState } from 'react'
import styles from './Dropdown.module.scss'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import ProfileContent from './ProfileContent/ProfileContent'
import FilmsContent from './FilmsContent/FilmsContent'
type DropdownProps = {
	isNotificationsOpen: boolean,
	isProfileOpen: boolean,
	isFilmsOpen: boolean,

}
const Dropdown: FC<DropdownProps> = ({ isNotificationsOpen, isProfileOpen, isFilmsOpen}) => {

	return (
		<div
			className={`${styles.dropdown} ${isNotificationsOpen || isProfileOpen || isFilmsOpen ? `${styles.dropdownOpen}` : ''}`}
			style={isProfileOpen ? { height: "320px" } : isNotificationsOpen ? { height: "280px" } : isFilmsOpen ? { height: "410px"} : {}}
		>
			<div className={styles.dropdownBody}>
				{isNotificationsOpen ? <NotificationsContent /> : null}
				{isFilmsOpen ? <FilmsContent /> : null}
				{isProfileOpen ? <ProfileContent /> : null}
			</div>

		</div>
	)
}

export default Dropdown