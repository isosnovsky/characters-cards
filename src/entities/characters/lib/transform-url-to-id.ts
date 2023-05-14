export const transformUrlToId = (url: string): string | null => {
  if (!url) {
    return null
  }

  return url.split('/').filter(Boolean).at(-1)
}
