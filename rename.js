const fs = require('fs')
const sourceFolder = '1'
const destinationFolder = '2'

const copyFile = (sourceFileName, destinationFileName) =>
  new Promise((resolve, reject) => {
    fs.copyFile(sourceFileName, destinationFileName, (err) => {
      if (err) reject(err)
      resolve(resolve)
    })
  })

const files = fs.readdirSync(sourceFolder)

const run = async () => {
  for (const file of [...files]) {
    const name = file.toLowerCase()
    // const [name] = file.split('-white')
    const sourceFileName = `${sourceFolder}/${file}`
    const destinationFileName = `${destinationFolder}/${name}`
    console.log(sourceFileName, destinationFileName)
    await copyFile(sourceFileName, destinationFileName)
  }
}

run().catch(console.log)
