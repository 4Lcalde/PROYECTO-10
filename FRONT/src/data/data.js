// import { changeMode } from '../components/modo/modo'
import { logOut } from '../components/logOut/logOut'
import { changeMode } from '../components/modo/modo'
import { eventGenerator } from '../pages/events/event'
import { home } from '../pages/home/home/home'
import { presentation } from '../pages/presentation/presentation'

import { userPage } from '../pages/user/userPage/userPage'
import { deleteUser } from '../utils/user/deleteUser/deleteUser'
import { updateUser } from '../utils/user/updateUser/updateUser'

export const routes = [
  { texto: 'Planet express', funcion: presentation },
  { texto: 'La empresa', funcion: home },
  { texto: 'Eventos', funcion: eventGenerator }
]

export const headerOptions = [
  { texto: 'Mi perfil', funcion: userPage },
  { texto: 'Cambiar diseño', funcion: changeMode },
  { texto: 'Cerrar sesión', funcion: logOut }
]

export const userButtons = [
  { texto: 'Modificar usuario', funcion: updateUser },
  { texto: 'Eliminar usuario', funcion: deleteUser }
]

export const userDeleteButtons = [{ texto: 'Eliminar' }, { texto: 'Cancelar' }]

export const userUpdateButtons = [{ texto: 'Modificar' }, { texto: 'Cancelar' }]

export const updateValues = [
  'Usuario',
  'Nombre',
  'Apellidos',
  'Email',
  'Contraseña'
]

export const elementsNewEvent = [
  'Nombre',
  'Fecha',
  'Lugar',
  'Foto',
  'Descripción'
]

export const elementsUpdateEvent = [
  'Evento',
  'Fecha',
  'Lugar',
  'Imagen',
  'Descripción'
]

export const optionsSelectFilterEvents = [
  'Proximos eventos',
  'Eventos pasados',
  'Todos'
]

export const valuesPrincipal = [
  {
    texto: 'Compañerismo',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/compa%C3%B1erismo_ecmxi2.png'
  },
  {
    texto: 'Confianza',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/confianza_rtxmab.jpg'
  },
  {
    texto: 'Conocimiento',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/conocimiento_wwrwfj.jpg'
  },
  {
    texto: 'Diversidad',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/diversidad_aldagv.jpg'
  },
  {
    texto: 'Innovación ',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/innovacion_pbb00g.jpg'
  },
  {
    texto: 'Interés',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/interes_auaumi.jpg'
  },
  {
    texto: 'Adaptabilidad ',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732561664/adaptabilidad_cz6irf.jpg'
  },
  {
    texto: 'Liderazgo ',
    img: 'https://res.cloudinary.com/drs09rbjv/image/upload/v1732563419/liderazgo_hiydyh.jpg'
  }
]

export const dataRegister = [
  { texto: 'Introduce tu nombre', type: 'text', id: 'name-register' },
  { texto: 'Introduce tus apellidos', type: 'text', id: 'lastName-register' },
  { texto: 'Introduce tu user', type: 'text', id: 'user-register' },
  { texto: 'email@example.com', type: 'text', id: 'email-register' },
  {
    texto: 'Introduce tu contraseña',
    type: 'password',
    id: 'password-register'
  },
  { texto: 'Imagen de perfil', type: 'file', id: 'img-register' }
]
