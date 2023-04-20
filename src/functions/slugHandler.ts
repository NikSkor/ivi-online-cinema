import { countriesData } from "@/components/ui/filters/counties.data";
import { genresData } from "@/components/ui/filters/genres.data";
import { setCountries, setGenres } from "@/store/slices/filtersSlice";
import { useRouter } from "next/router";

interface ISlugValues {
  slugList: string[]
  slugType: string
}

const allGenres = genresData.map((item) => item.value)
const allCountries = countriesData.map((item) => item.value)

export function slugHandler(slug: string | string[]) {
  if (typeof slug === 'string') {
    const slugType = getSlugType(slug)

    if (slugType === '404') return console.log('404')

    return [{slugList: slug.split('+'), slugType: slugType}]

  } else {

    let slugValues: ISlugValues[] = []

    if (slug.length > 2) return console.log('404')

    if (slug.length === 2 && (getSlugType(slug[0]) !== 'genres' || getSlugType(slug[1]) !== 'countries')) {
      return console.log('404')
    } else {
      slug.forEach((item) => {
        const slugType = getSlugType(item)
  
        slugValues.push({slugList: item.split('+'), slugType: slugType})
  
      })
    }
    return slugValues
  }


}

function getSlugType(slug: string) {
  const slugList = slug.split('+')
  if (slugList.every(item => allGenres.indexOf(item) !== -1)) return 'genres'
  if (slugList.every(item => allCountries.indexOf(item) !== -1)) return 'countries'
  return '404'
}
