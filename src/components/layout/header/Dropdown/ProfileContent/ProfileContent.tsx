import Link from "next/link"
import MenuList from "./MenuList/MenuList"
import styles from "./ProfileContent.module.scss"

const ProfileContent = () => {
	return (
		<div className={styles.content}>
			<MenuList />
			<div className={styles.authBlock}>
				<Link href="/auth">
					<button>Войти или зарегистрироваться</button>
				</Link>
				<Link href="/admin">
					<button>Войти как администратор</button>
				</Link>
				<div className={styles.settings}>
					<Link href="/">Настройки</Link>
					<Link href="/">Помощь</Link>
				</div>
			</div>
		</div>
	)
}

export default ProfileContent