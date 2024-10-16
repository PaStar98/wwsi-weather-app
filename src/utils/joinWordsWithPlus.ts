export default function joinWordsWithPlus(sentence: string | undefined): string {
  if (sentence === undefined) {
    return 'No input provided'
  }

  const words = sentence.split(' ')
  return words.join('+')
}
