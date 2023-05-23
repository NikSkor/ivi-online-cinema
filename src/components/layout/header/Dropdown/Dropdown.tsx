import { FC, useEffect, useState } from 'react'
import styles from './Dropdown.module.scss'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import ProfileContent from './ProfileContent/ProfileContent'
import FilmsContent from './FilmsContent/FilmsContent'

type DropdownProps = {
	isNotificationsOpen: boolean,
	isProfileOpen: boolean,
	isFilmsOpen: boolean,
	countries: any[],
	genres: any[]

}
const Dropdown: FC<DropdownProps> = ({ isNotificationsOpen, isProfileOpen, isFilmsOpen, countries, genres }) => {

	return (
		<div
			className={`${styles.dropdown} ${isNotificationsOpen || isProfileOpen || isFilmsOpen ? `${styles.dropdownOpen}` : ''}`}
			style={isProfileOpen ? { height: "320px" } : isNotificationsOpen ? { height: "280px" } : isFilmsOpen ? { height: "480px"} : {}}
		>
			<div className={styles.dropdownBody}>
				{isNotificationsOpen ? <NotificationsContent /> : null}
				{isFilmsOpen ? <FilmsContent genres={genres} countries={countries}/> : null}
				{isProfileOpen ? <ProfileContent /> : null}
			</div>

		</div>
	)
}

export default Dropdown