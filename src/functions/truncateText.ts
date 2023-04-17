export function truncateText(text: string, maxLength: number, typeOfTruncate?: string) {
  if (text.length <= maxLength) return text
<<<<<<< HEAD

  if (typeOfTruncate === 'break-word') {
    return text.slice(0, maxLength) + '...'
    
  } else {
    let truncateText = ''

    for (let word of text.split(' ')) {
      if ((truncateText + ' ' + word).length >= maxLength) break
      truncateText += ` ${word}`
    }
    return truncateText + '...'
  }
=======
  let result = ''

  for (let word of text.split(' ')) {
    if ((result + ' ' + word).length >= maxLength) break
    result += ` ${word}`
  }

  if (result === '') result = text.slice(0, maxLength)
  return result + '...'
>>>>>>> ceaf3fbde14791ce22a1b2eb470ae7e609ecb8b3
}