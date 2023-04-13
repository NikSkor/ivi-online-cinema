import { FC, useState } from 'react'
import styles from './Category.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Slider from './Slider/Slider'
type CategoryProps = {
  title: String
}
const Category: FC<CategoryProps> = ({ title }) => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])


  return (
    <div className={styles.category}>
      <Link href="/">
        {title}
        <Image src="/arrow-right-icon.svg" width={19} height={19} alt="arrow" />
      </Link>
      <Slider items={items}/>
    </div>
  )
}

export default Category