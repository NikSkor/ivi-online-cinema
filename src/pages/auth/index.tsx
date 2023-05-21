import Auth from "@/components/screens/auth/Auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { checkAuth } from "@/store/slices/authSlice";
import { NextPage } from "next";
import { useEffect } from "react";

const AuthPage: NextPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])
  const isAuth = useAppSelector(state => state.auth.isAuth)
  isAuth ? window.location.href="/" : null
  return(
    <>
    <Auth />
    </>
  )
}

export default AuthPage