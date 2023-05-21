import { ChangeEvent, FC, useEffect, useState } from "react"
import styles from './Auth.module.scss'
import Image from "next/image"
import Link from "next/link"
import SentMessage from "./SentMessage/SentMessage"
import { Router, useRouter } from "next/router"
import axios from "axios"
import AuthForm from "./AuthForm/AuthForm"
import { useAppSelector } from "@/store/hooks"
import { redirect } from "next/navigation"


const Auth: FC = () => {
  
  const [authProgress, setAuthProgress] = useState<number>(5)
  const locale = useRouter().locale
  
  const isAuth = useAppSelector(state => state.user.isAuth)
  if (useRouter().query.accessToken && useRouter().query.refreshToken) {
    const params: any = useRouter().query
    localStorage.setItem('token', params.accessToken)
    localStorage.setItem('token/refresh', params.refreshToken)
    window.location.href = "/"
  }



  return (
    <div className={styles.authPage}>
      <header>
        <p>{locale === 'ru' ? 'Вход или регистрация' : 'Login or registration'}</p>
        <Link href="/">
          <Image src="/x-icon.svg" width={20} height={20} alt="x" />
        </Link>
        <div className={styles.progressBar}>
          <div className={styles.currentProgress} style={{ width: `${authProgress}%`}}>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.chat}>
          <SentMessage title={locale === 'ru' ? 'Зарегистрируйтесь,' : 'Register'} extra={locale === 'ru' ? 'чтобы пользоваться сервисом на любом устройстве' : 'to use the service on any device'} />
          <AuthForm />
        </div>
      </main>
    </div>
  )
}

export default Auth
