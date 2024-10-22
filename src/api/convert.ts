// const convert = require('fbx2gltf')
import convert from 'fbx2gltf'

const getConvertedFile = (path) => {
  const pathUrl = URL.createObjectURL(path)

  console.log('PATH', pathUrl)
}

// const getConvertedFile = async(file) => {
//   const reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onload = async () => {
//     const response = await fetch('/api/convert', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ file: reader.result.split(',')[1] }), // حذف سرآیند data URL
//     })

//     const data = await response.json()
//     return data
//   }
// }

export default getConvertedFile
