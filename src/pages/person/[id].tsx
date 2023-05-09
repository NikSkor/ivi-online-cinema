import React from 'react'
import { NextPage } from 'next'
import Person from '@/components/screens/person/Person'
import { Context } from 'vm'
export interface PersonProps {
	person: IPersonArray | undefined
}

const PersonPage = ( {person} : PersonProps ) => {

  return (
    <>
      <Person person={person} />
    </>
  )
}

export default PersonPage
export interface IPerson {
	personId: number,
	name: string,
	enName: string,
	photo: string
}

export interface IMovies {
	movieId: number,
	name: string,
	enName?: string,
	type: string,
	rating: number,
	ageRating: number,
	description: string,
	movieLength: number,
	poster: string,
	premiere: Date,
	shortDescription: string,
	slogan: string,
	trailer: string,
	votes: number
}

export interface IProfessions {
	professionId: number,
	name: string
}

export interface IPersonArray {
	id: number,
	movies: IMovies[],
	person: IPerson,
	personId: number,
	professions: IProfessions
}
PersonPage.getInitialProps = async (context: Context) => {
	//const id = ctx //.asPath.match(/\/d+$/)
	const id = context.query.id
	const response = await fetch(`http://localhost:5000/api/person/${id}`)
	const person: IPersonArray[] | undefined = await response.json()

	return {
		person: person ? person[0] : undefined
	}
}
