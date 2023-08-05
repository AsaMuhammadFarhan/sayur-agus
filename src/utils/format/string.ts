export function replaceAllString(
  value: string,
  replaceWord: string,
  replaceWith: string
) {
  const final = value.split(replaceWord);
  return final.join(replaceWith);
}
