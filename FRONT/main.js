import { lanzamientoInicio } from './src/pages/lanzamiento inicio/lanzamientoInicio'
import './style.scss'

lanzamientoInicio()
document.body.className = localStorage.getItem('modo') || ''
