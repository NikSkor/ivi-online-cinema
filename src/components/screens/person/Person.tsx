import Layout from '@/components/layout/Layout'
import PersonHeader from '@/components/ui/personHeader/PersonHeader'
import React, { FC, useRef, useState } from 'react'

// style
import styles from './Person.module.scss'

// data
import { personData } from './person.data'
import { filmographyData } from '@/components/ui/filmography/filmography.data'

// components
import PersonSection from '@/components/ui/personSection/PersonSection'
import Filmography from '@/components/ui/filmography/Filmography'
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs'
import BackLink from '@/components/ui/backLink/BackLink'
import { PersonProps } from '@/pages/person/[id]'


const Person: FC<PersonProps> = ({person}) => {

  const [showBiography, setShowBiography] = useState(false)

  const biographyRef = useRef<HTMLHeadingElement>(null)

  const biographyParagraphs = personData.biography.split('\n')

	console.log(person)

	if (person)
  return (
    <Layout title={person.person.name}>
      <main>
        <div className={styles.personPage}>
          <BackLink />

          <PersonSection>
            <PersonHeader
								photoURL={person.person.photo}
								personNameRu={person.person.name}
								personNameEn={person.person.enName}
								story={person.person.name}
						/>
						<div className={styles.anchorLink__container}>
							<span
								className={styles.anchorLink}
								onClick={() => biographyRef.current?.scrollIntoView({behavior: 'smooth'})}
								>
									Биография
							</span>
						</div>
          </PersonSection>

          <PersonSection>
            <Filmography
                      filmographyArray={filmographyData}
                    />
                    <div className={styles.personBiography}>
                      <h1 ref={biographyRef} className={styles.title}>Биография</h1>
                      <div className={styles.biography__container}></div>
                      <p className={styles.biographyParagraph}>{biographyParagraphs[0]}</p>
                      {showBiography &&
                        biographyParagraphs.slice(1).map((paragraph) => (
                          <p className={styles.biographyParagraph}>{paragraph}</p>
                        ))
                      }
                      <span className={styles.content__toggle}
                            onClick={() => setShowBiography(!showBiography)}>
                        {showBiography ? 'Свернуть' : 'Развернуть'}
                      </span>
                    </div>
          </PersonSection>

          <PersonSection>
            <div className={styles.breadCrumbs__container}>
              <div className={styles.person__breadCrumbs}>
                <BreadCrumbs
                  pathList={[{pathLink: '/', pathName: 'Мой Иви'}]}
                  slug={personData.personNameRu} />
              </div>
            </div>
          </PersonSection>
        </div>
      </main>
    </Layout>
  )
	else return (
		<Layout title='Страница не найдена'>
			404
		</Layout>
	)
}

export default Person
