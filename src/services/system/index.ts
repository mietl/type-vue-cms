import httpRequest from '../'

export function postUserList() {
  return httpRequest.post('/users/list', {
    data: {
      offset: 0,
      size: 10
    }
  })
}
