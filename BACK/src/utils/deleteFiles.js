const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  const imgSplited = imgUrl.split('/')
  const folderName = imgSplited.at(-2)
  const ImgName = imgSplited.at(-1).split('.')
  const publicId = `${folderName}/${ImgName[0]}`

  cloudinary.uploader.destroy(publicId, () => {
    console.log('Elemento eliminado de cloudinary')
  })
}

module.exports = { deleteFile }
