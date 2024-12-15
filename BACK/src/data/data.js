const bcrypt = require('bcrypt')
const testEvents = [
  {
    event: 'Interplanetary Olympics',
    date: new Date('2025-05-22'),
    place: 'Mars Stadium',
    img: 'https://thesimpsonsrp.com/wp-content/uploads/2011/08/4acv1323-400x304.jpg',
    description:
      'Compite con los mejores atletas de toda la galaxia en los Juegos Olímpicos Interplanetarios.'
  },
  {
    event: 'Planet Express Annual Party',
    date: new Date('2024-12-31'),
    place: 'Planet Express Headquarters',
    img: 'https://www.defondos.com/bulkupload/wallpapers-de-futurama/Caricaturas/Futurama/Fiesta%20Futurama_800.jpg',
    description:
      'Únete a la fiesta anual de Planet Express y celebra el fin de otro año caótico de entregas intergalácticas.'
  },
  {
    event: 'Robot Fighting League Championship',
    date: new Date('2025-11-04'),
    place: 'New New York Arena',
    img: 'https://i.ytimg.com/vi/03Ha_m6hYIE/maxresdefault.jpg',
    description:
      'Los robots más feroces del universo se enfrentan en un campeonato épico.'
  },
  {
    event: 'All My Circuits Season Premiere',
    date: new Date('2024-02-15'),
    place: 'Online',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1729148676/All_My_Circuits_ifxmcx.webp',
    description:
      'No te pierdas el estreno de la nueva temporada de la telenovela favorita de los robots: All My Circuits.'
  },
  {
    event: 'Moon Landing Anniversary Concert',
    date: new Date('2024-12-20'),
    place: 'The Moon Park',
    img: 'https://i.blogs.es/e5b58e/futurama/500_333.jpeg',
    description:
      'Celebra el aniversario del primer aterrizaje en la Luna con un concierto estelar en vivo.'
  }
]

const testUsers = [
  {
    user: 'fry',
    name: 'Philip',
    lastname: 'Fry',
    email: 'fry@planetexpress.com',
    password: bcrypt.hashSync('fry123', 10),
    rol: 'user',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1725516477/images_lwxmmv.jpg',
    confirmed: []
  },
  {
    user: 'leela',
    name: 'Turanga',
    lastname: 'Leela',
    email: 'leela@planetexpress.com',
    password: bcrypt.hashSync('leela123', 10),
    rol: 'admin', // Leela podría ser admin
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1725516408/l-intro-1661530619_w84rvj.jpg',
    confirmed: []
  },
  {
    user: 'bender',
    name: 'Bender',
    lastname: 'Rodriguez',
    email: 'bender@planetexpress.com',
    password: bcrypt.hashSync('bender123', 10),
    rol: 'user',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1725516531/images_1_bgicim.jpg',
    confirmed: []
  },
  {
    user: 'zoidberg',
    name: 'Doctor',
    lastname: 'Zoidberg',
    email: 'zoidberg@planetexpress.com',
    password: bcrypt.hashSync('zoidberg123', 10),
    rol: 'user',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1729148448/warlock-uses-destiny-2s-dd-crossover-armor-to-recreate-zoidberg-from-futurama_cqusma.avif',
    confirmed: []
  },
  {
    user: 'farnsworth',
    name: 'Philip J.',
    lastname: 'Farnsworth',
    email: 'farnsworth@planetexpress.com',
    password: bcrypt.hashSync('farnsworth123', 10),
    rol: 'admin', // Farnsworth es el jefe
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1729148521/vkndtq3rxjy51_jjy3gw.webp',
    confirmed: []
  }
]

module.exports = { testEvents, testUsers }
