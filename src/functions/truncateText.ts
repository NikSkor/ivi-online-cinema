export function truncateText(text: string, maxLength: number, typeOfTruncate?: string) {
  if (text.length <= maxLength) return text

  if (typeOfTruncate === 'break-word') {
    return text.slice(0, maxLength) + '...'
  } else {
    let result = ''

    for (let word of text.split(' ')) {
      if ((result + ' ' + word).length >= maxLength) break
      result += ` ${word}`
    }
    return result + '...'
  }

}