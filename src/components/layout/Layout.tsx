import { FC, PropsWithChildren, useEffect, useState } from "react"
import Meta from "../seo/Meta"
import { IMeta } from "../seo/Meta.interface"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import MobileFooter from "./MobileFooter/MobileFooter"
import axios from "axios"
import { useAppDispatch } from "@/store/hooks"
import { checkAuth } from "@/store/slices/userSlice"

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  const [genres, setGenres] = useState([])
  const [countries, setCountries] = useState([])
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movie/genre')
        setGenres(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getCountries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movie/country')
        setCountries(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getGenres()
    getCountries()
    
    if(localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <Meta title={title} description={description}>
      <Header genres={genres} countries={countries}/>
      {children}
      <MobileFooter />
      <Footer />
    </Meta>
  )
}

export default Layout