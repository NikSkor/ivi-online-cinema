import { FC } from 'react'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
type Menuitem = {
	title: string,
	icon: string
}
const MenuItem: FC<Menuitem> = ({ title, icon }) => {
	return (
		<div className={styles.menuItem}>
			<Image src={icon} width={22} height={22} alt="icon" />
			<p>{title}</p>
		</div>
	)
}
export default MenuItem