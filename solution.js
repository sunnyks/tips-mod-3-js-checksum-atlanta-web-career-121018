function checksum(data) {
  let output = 0
  data.forEach((row) => {
    //probably could use reduce here
    let small = row[0]
    let big = row[0]
    row.forEach((e) => {
      if (e<small) {
        small = e
      }
      if (e>big) {
        big = e
      }
    })
    output += big - small
  })
  return output
}
