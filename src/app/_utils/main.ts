
export function formatNumber (n: number) {
  return n.toFixed(0).replace(/./g, (c, i, a) => {
    return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c
  })
}
