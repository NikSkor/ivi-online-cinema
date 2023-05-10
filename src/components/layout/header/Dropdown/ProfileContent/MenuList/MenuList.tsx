import { useRouter } from 'next/router'
import MenuItem from './MenuItem/MenuItem'
import styles from './MenuList.module.scss'
import { MenuListData } from './MenuListData'

const MenuList = () => {
	const locale = useRouter().locale
	return (
		<div className={styles.menuList}>
			{
				MenuListData.map(menuItem => <MenuItem title={locale === 'ru' ? menuItem.title : menuItem.enTitle} icon={menuItem.icon} />)
			}
		</div>
	)
}

export default MenuList