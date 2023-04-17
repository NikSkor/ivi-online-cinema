export function truncateText (text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  let result = ''

  for (let word of text.split(' ')) {
    if ((result + ' ' + word).length >= maxLength) break
    result += ` ${word}`
  }

  if (result === '') result = text.slice(0, maxLength)
  return result + '...'
}