import { hideLoader, loader, showLoader } from '../../utils/loader/loader'

export const fetchTemplate = async (
  folder,
  method,
  body = null,
  type = 'application/json',
  id = null,
  subpath = ''
) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  if (type !== 'multipart/form-data') {
    headers['Content-Type'] = type
  }

  const url = `http://localhost:3000/api/v1/${folder}${id ? `/${id}` : ''}${
    subpath ? `/${subpath}` : ''
  }`

  await loader()
  await showLoader()

  try {
    const res = await fetch(url, {
      method,
      ...(body && {
        body: type === 'multipart/form-data' ? body : JSON.stringify(body)
      }),
      headers
    })

    const data = await res.json()

    return { status: res.status, data }
  } catch (error) {
    const res = error.response
    const data = await res.json()
    return { status: res.status, data }
  } finally {
    await hideLoader()
  }
}
