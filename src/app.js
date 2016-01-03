function delay (t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}

;(async () => {
  await delay(2000)
})()
