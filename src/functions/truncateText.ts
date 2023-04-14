export function truncateText (text: string, maxLength: number) {
  if (text.length <= maxLength) return text

  let truncateText = ''

  for (let word of text.split(' ')) {
    if ((truncateText + ' ' + word).length >= maxLength) break
    truncateText += ` ${word}`
  }
  return truncateText + '...'
}