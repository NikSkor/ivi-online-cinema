import Link from "next/link"
import MenuList from "./MenuList/MenuList"
import styles from "./ProfileContent.module.scss"
import { useRouter } from "next/router"

const ProfileContent = () => {
	const locale = useRouter().locale
	return (
		<div className={styles.content}>
			<MenuList />
			<div className={styles.authBlock}>
				<Link href="/auth">
					<button>
						{
							locale === 'ru'
							? `Войти или зарегистрироваться`
							: `Log in or register`
						}
					</button>
				</Link>
				<Link href="/admin">
					<button>
						{
							locale === 'ru'
							? `Войти как администратор`
							: `Log in as an administrator`
						}
					</button>
				</Link>
				<div className={styles.settings}>
					<Link href="/">
						{
							locale === 'ru'
							? `Настройки`
							: `Settings`
						}
					</Link>
					<Link href="/">
						{
							locale === 'ru' 
							? `Помощь`
							: 'Help'
						}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProfileContent