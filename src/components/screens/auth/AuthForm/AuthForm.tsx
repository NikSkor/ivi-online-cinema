import React, {useState, useEffect} from 'react'
import styles from './AuthForm.module.scss'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'
import AuthService from '@/services/AuthService'
import { login, registration } from "@/store/slices/authSlice"
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export default function AuthForm() {
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [nameValue, setNameValue] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [isReg, setIsReg] = useState<boolean>(true)

  const locale = useRouter().locale
  const dispatch = useAppDispatch()

  const authHandler = async () => {
    if (isReg) {
      try {
        dispatch(registration({email: loginValue, password: passwordValue, username: nameValue}))
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        dispatch(login({email: loginValue, password: passwordValue}))
      } catch (error) {
        console.log(error)
      }
    }
  }


  useEffect(() => {
    if (isReg) {
      (loginValue.length > 0 && passwordValue.length > 0 && nameValue.length > 0)  ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
    } else {
      (loginValue.length > 0 && passwordValue.length > 0)  ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
    }
  }, [loginValue, passwordValue, nameValue])

  return (
    <div className={styles.authForm}>
            <div className={styles.inputBlock}>
            <svg viewBox="0 0 64 64">
            <path fill="#231F20" d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z
              M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808
              l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842
              C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228
              c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"/>
            </svg>
            <input type="email" name="login" value={loginValue} onChange={event => setLoginValue(event.target.value)} placeholder="Email"/>
            </div>
            {isReg && (
              <div className={styles.inputBlock}>
              <svg className={styles.avatar} width="25" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="rgba(4, 5, 10, 0.3)" d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" />
              </svg>
                <input type="text" name="username" value={nameValue} onChange={event => setNameValue(event.target.value)} placeholder={locale === 'ru' ? "Имя пользователя" : 'Username'}/>
              </div>
            )}
            <div className={styles.inputBlock}>
              <svg fill="rgba(4, 5, 10, 0.5)" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0C10.364 0 7 3.364 7 7.5v3c0 .657 1 .668 1 0v-3C8 3.904 10.904 1 14.5 1S21 3.904 21 7.5v3c0 .676 1 .644 1 0v-3C22 3.364 18.636 0 14.5 0zm0 17c-1.375 0-2.5 1.125-2.5 2.5 0 .77.406 1.445 1 1.914V23.5c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2.088c.594-.47 1-1.143 1-1.912 0-1.375-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5 0 .536-.286 1.027-.75 1.295-.155.09-.25.255-.25.434v2.27c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2.27c0-.178-.095-.344-.25-.433-.464-.268-.75-.76-.75-1.297 0-.834.666-1.5 1.5-1.5zm-9-6c-.822 0-1.5.678-1.5 1.5v15c0 .822.678 1.5 1.5 1.5h18c.822 0 1.5-.678 1.5-1.5v-15c0-.822-.678-1.5-1.5-1.5zm0 1h18c.286 0 .5.214.5.5v15c0 .286-.214.5-.5.5h-18c-.286 0-.5-.214-.5-.5v-15c0-.286.214-.5.5-.5z"/></svg>
              <input type="text" name="password" value={passwordValue} onChange={event => setPasswordValue(event.target.value)} placeholder={locale === 'ru' ? "Пароль" : 'Password'}/>
            </div>
            {isReg && <p className={styles.isReg}>Уже есть аккаунт? <span onClick={() => setIsReg(false)}>Авторизуйтесь!</span></p>}
            {!isReg && <p className={styles.isReg}>Нет аккаунта? <span onClick={() => setIsReg(true)}>Зарегистрируйтесь!</span></p>}
              <div className={styles.authIcons}>
                <a href="http://localhost:5000/api/auth/google/login">
                <img src="/google-icon.svg" width={28} height={28} alt="" />
                </a>
                <a href="http://localhost:5000/api/auth/vk/login">
                  <img src="/vk-icon.svg" width={28} height={28} alt="" />
                </a>
            </div>
            <button onClick={authHandler} disabled={isButtonDisabled}>{locale === 'ru' ? 'Продолжить' : 'Continue'}</button>
            <div className={styles.rules}>
              <p>{locale === 'ru' ? "Нажимая «Продолжить», я соглашаюсь" : 'By clicking "Continue", I agree'}</p>
              <p>{locale === 'ru' ? 'с ' : 'with '}<span>{locale === 'ru' ? 'Политикой конфиденциальности' : 'Privacy Policy'}</span></p>
              <p>{locale === 'ru' ? 'и ' : 'and '}<span>{locale === 'ru' ? 'Пользовательским соглашением' : 'User Agreement'}</span></p>
            </div>
    </div>
  )
}
