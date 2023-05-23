import { FC, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import styles from './PersonSearch.module.scss'
import { ISeacrh } from '@/interfaces/filters/ISearch'

// next components
import Image from 'next/image'
import Link from 'next/link'

// images
import loupe from '/public/search.svg'
import cross from '/public/cross.svg'
import personIcon from '/public/person.svg'

// redux
import { useRouter } from 'next/router'
import { selectActor, selectProducer, setActor, setProducer } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

// data
import { actorsList } from '../actors.data'


const PersonSearch: FC<ISeacrh> = ({ placeholder, searchType }) => {

  const [searchValue, setSearchValue] = useState('')
	const [showDropDawn, setShowDropDawn] = useState(false)

	const reduxValue = (searchType === 'actor')
										 ? useAppSelector(selectActor)
										 : useAppSelector(selectProducer)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()
  const dispatch = useAppDispatch()

	const title = (searchType === 'actor')
								? 'актеру'
								: 'режиссеру'

	useEffect(() => {
		if(!router.isReady) return

    setSearchValue(reduxValue)
	}, [reduxValue])

  const focus = () => {
		const slug = router.query.slug
    const query = router.query
    delete query.slug

    const path = Array.isArray(slug)
                 ? ('/movies/' + slug.join('/'))
                 : (slug ? ('/movies/' + slug) : '/movies')

    inputRef?.current?.focus()
    setSearchValue('')

    if (searchType === 'actor') {
			delete query.actor
			dispatch(setActor(''))
				router.push({pathname: path, query: {
					...query
				}})
			}

		if (searchType === 'producer') {
			delete query.producer
			dispatch(setProducer(''))
			router.push({pathname: path, query: {
				...query
			}})
		}

		setShowDropDawn(false)
  }

  const debounceOnValue = useDebouncedCallback((value: string) => {
    const slug = router.query.slug
    const query = router.query
    delete query.slug

    const path = Array.isArray(slug)
                 ? ('/movies/' + slug.join('/'))
                 : (slug ? ('/movies/' + slug) : '/movies')

    if (searchType === 'actor') {
    dispatch(setActor(value))
      router.push({pathname: path, query: {
        ...query,
        actor: value.toLowerCase()
      }})
    }

    if (searchType === 'producer') {
      dispatch(setProducer(value))
      router.push({pathname: path, query: {
        ...query,
        producer: value.toLowerCase()
      }})
    }

		if (value) {
			setShowDropDawn(true)
		} else {
			setShowDropDawn(false)
		}

  }, 250)

  const changeHandle = (value: string) => {
    setSearchValue(value)
    debounceOnValue(value)
  }

	const focusHandle = () => {
		if (reduxValue) setShowDropDawn(true)
	}


  return (
		<div>
			<h2 className={styles.searchInput__title}>Поиск по {title}</h2>
			<form className={styles.searchInput__form}>
				<input
					type="text"
					placeholder={placeholder}
					className={styles.searchInput}
					value={searchValue}
					ref={inputRef}
					onFocus={() => focusHandle()}
					onBlur={() => setShowDropDawn(false)}
					onChange={(event) => changeHandle(event.target.value)}
				/>
				<div
					className={styles.input__btn}
					onClick={() => focus()}>
					<Image
						priority
						height={24}
						width={24}
						src={searchValue ? cross : loupe}
						alt="arrow_cion"
					/>
				</div>

				{showDropDawn &&
					<div className={styles.filter__dropDawn}>
						<div className={styles.dropDawn__content}>
							<div className={styles.list__container}>
								<ul className={styles.person__list}>
									{
										actorsList.map((item) => (
											<li>
												<Link
													className={styles.person__item}
													href={`/person/${item.id}`}>
													<Image
														priority
														height={22}
														width={22}
														src={personIcon}
														alt={'person_icon'} />
														<div className={styles.person__characters}>
															<h2 className={styles.person__title}>
																{item.fullName}
															</h2>
															<span className={styles.person__post}>
																{item.post}
															</span>
														</div>
												</Link>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					</div>
				}
			</form>
		</div>

  )
}
export default PersonSearch
