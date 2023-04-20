import { FC } from 'react'
import styles from './PlankItem.module.scss'
import { IPlankItem } from '@/interfaces/filters/IPlankItem'
import downArrow from '/public/down-arrow.svg'
import upArrow from '/public/up-arrow.svg'
import Image from 'next/image'
import DropDawn from '../dropDawn/DropDawn'
import { useOutside } from '@/hooks/useOutside'

const PlankItem: FC<IPlankItem> = ({plankName, filterType, dropDawnList, values}) => {

  const { show, setShow, ref } = useOutside(false)

  return (
    <div className={styles.plankItem}>
      <div className={styles.plank__container} ref={ref}>
        <div  
            className={styles.plank}
            onClick={() => setShow(!show)}
            >
            <div className={styles.plank__title}>{plankName}</div>
            <Image
              priority
              height={16}
              width={16}
              src={show ? upArrow : downArrow}
              alt="arrow_cion"
            />
        </div>
        {show &&
          <DropDawn 
          filterType={filterType}
          dropDawnList={dropDawnList} />
        }
      </div>
    </div>
    )
}

export default PlankItem