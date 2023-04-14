export function truncateText(text: string, maxLength: number, typeOfTruncate?: string) {
  if (text.length <= maxLength) return text

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
}