import { FC, PropsWithChildren } from "react"
import Meta from "../seo/Meta"
import { IMeta } from "../seo/Meta.interface"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import MobileFooter from "./MobileFooter/MobileFooter"

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <MobileFooter />
      <Footer />
    </Meta>
  )
}

export default Layout