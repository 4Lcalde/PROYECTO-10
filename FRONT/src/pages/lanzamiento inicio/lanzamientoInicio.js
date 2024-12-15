import { footer } from '../../components/footer/foooter'
import { header } from '../../components/header/header'

import { login } from '../login/login'
import { presentation } from '../presentation/presentation'

export const lanzamientoInicio = () => {
  const user = localStorage.getItem('user')

  if (user) {
    header()
    presentation()
    footer()
  } else {
    login()
  }
}
