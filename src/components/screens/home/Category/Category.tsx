import { FC, useState } from 'react'
import styles from './Category.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Slider from './Slider/Slider'
import { CategoryData } from './CategoryData/CategoryData'
import { filmographyData } from '@/components/ui/filmography/filmography.data'
type CategoryProps = {
  title: String
}
const Category: FC<CategoryProps> = ({ title }) => {
  const [items, setItems] = useState(filmographyData)


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