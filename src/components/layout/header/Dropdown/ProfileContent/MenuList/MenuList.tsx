import MenuItem from './MenuItem/MenuItem'
import styles from './MenuList.module.scss'
import { MenuListData } from './MenuListData'

const MenuList = () => {
	return (
		<div className={styles.menuList}>
			{
				MenuListData.map(menuItem => <MenuItem title={menuItem.title} icon={menuItem.icon} />)
			}
		</div>
	)
}

export default MenuList