export const copyToClipboard = (data: string): void => {
  navigator.clipboard.writeText(data)
}
