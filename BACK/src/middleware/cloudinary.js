const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'PruebaCloudinary',
    allowedFormats: ['jpeg', 'jpg', 'png', 'gif', 'webp', 'avif']
  }
})

const upload = multer({ storage })
module.exports = upload
