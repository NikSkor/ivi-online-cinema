import Link from "next/link"
import MenuList from "./MenuList/MenuList"
import styles from "./ProfileContent.module.scss"

const ProfileContent = () => {
	return (
		<div className={styles.content}>
			<MenuList />
			<div className={styles.authBlock}>
				<button>Войти или зарегистрироваться</button>
				<div className={styles.settings}>
					<Link href="/">Настройки</Link>
					<Link href="/">Помощь</Link>
				</div>
			</div>
		</div>
	)
}

export default ProfileContent