export interface IFilmographyItem {
	movieId: number,
	name: string,
	enName?: string,
	type?: string,
	rating: number,
	ageRating?: number,
	description?: string,
	movieLength?: number,
	poster: string,
	premiere: Date,
	shortDescription?: string,
	slogan?: string,
	trailer?: string,
	votes?: number
}
