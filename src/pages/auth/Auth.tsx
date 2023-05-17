import { ChangeEvent, FC, useEffect, useState } from "react"
import styles from './Auth.module.scss'
import Image from "next/image"
import Link from "next/link"
import SentMessage from "./SentMessage/SentMessage"
import { useRouter } from "next/router"
const Auth: FC = () => {

  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [authProgress, setAuthProgress] = useState<number>(5)
  const locale = useRouter().locale

  useEffect(() => {
    loginValue.length > 0 ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
  }, [loginValue])
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
          <SentMessage title={locale === 'ru' ? 'Войдите или зарегистрируйтесь' : 'Log in or register'} extra={locale === 'ru' ? 'чтобы пользоваться сервисом на любом устройстве' : 'to use the service on any device'} />
          {authProgress === 5 && (
            <div className={styles.authForm}>
            <div className={styles.inputBlock}>
            <input type="text" name="login" value={loginValue} onChange={event => setLoginValue(event.target.value)} placeholder="Email"/>
            <svg className={styles.avatar} width="25" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(4, 5, 10, 0.3)" d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" />
            </svg>
            </div>
            <div className={styles.inputBlock}>
            <svg fill="rgba(4, 5, 10, 0.5)" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0C10.364 0 7 3.364 7 7.5v3c0 .657 1 .668 1 0v-3C8 3.904 10.904 1 14.5 1S21 3.904 21 7.5v3c0 .676 1 .644 1 0v-3C22 3.364 18.636 0 14.5 0zm0 17c-1.375 0-2.5 1.125-2.5 2.5 0 .77.406 1.445 1 1.914V23.5c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2.088c.594-.47 1-1.143 1-1.912 0-1.375-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5 0 .536-.286 1.027-.75 1.295-.155.09-.25.255-.25.434v2.27c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2.27c0-.178-.095-.344-.25-.433-.464-.268-.75-.76-.75-1.297 0-.834.666-1.5 1.5-1.5zm-9-6c-.822 0-1.5.678-1.5 1.5v15c0 .822.678 1.5 1.5 1.5h18c.822 0 1.5-.678 1.5-1.5v-15c0-.822-.678-1.5-1.5-1.5zm0 1h18c.286 0 .5.214.5.5v15c0 .286-.214.5-.5.5h-18c-.286 0-.5-.214-.5-.5v-15c0-.286.214-.5.5-.5z"/></svg>
            <input type="text" name="password" value={passwordValue} onChange={event => setPasswordValue(event.target.value)} placeholder={locale === 'ru' ? "Пароль" : 'Password'}/>
              </div>
              <div className={styles.authIcons}>
                <a href="http://195.133.147.66:5000/api/auth/google/login"><img src="/google-icon.svg" width={28} height={28} alt="" /></a>
                <a href="http://195.133.147.66:5000/api/auth/vk/login"><img src="/vk-icon.svg" width={28} height={28} alt="" /></a>
            </div>
            <button disabled={isButtonDisabled}>{locale === 'ru' ? 'Продолжить' : 'Continue'}</button>
            <div className={styles.rules}>
              <p>{locale === 'ru' ? "Нажимая «Продолжить», я соглашаюсь" : 'By clicking "Continue", I agree'}</p>
              <p>{locale === 'ru' ? 'с ' : 'with '}<span>{locale === 'ru' ? 'Политикой конфиденциальности' : 'Privacy Policy'}</span></p>
              <p>{locale === 'ru' ? 'и ' : 'and '}<span>{locale === 'ru' ? 'Пользовательским соглашением' : 'User Agreement'}</span></p>
            </div>
          </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Auth
