const fs = require('fs');

// read a file
// fs.readFile('./docs/blogs.txt', (err, data) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })
// console.log('last line')

// write a file
// fs.writeFile('./docs/blogs.txt', 'hello, world', () => {
//   console.log('file was written')
// })
// fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
//   console.log('file was written')
// })

// directories
// if(!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if(err){
//       console.log(err)
//     }
//     console.log('folder is created')
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if(err){
//       console.log(err)
//     }
//     console.log('folder is deleted')
//   })
// }

// delete a file
if(!fs.existsSync('./docs/deleteMe.txt')) {
  fs.writeFile('./docs/deleteMe.txt', 'hello', (err) => {
    if(err){
      console.log(err)
    }
    console.log('file is created')
  })
} else {
  fs.unlink('./docs/deleteMe.txt', (err) => {
    if(err){
      console.log(err)
    }
    console.log('file is deleted')
  })
}