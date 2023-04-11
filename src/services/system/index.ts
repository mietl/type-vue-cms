import httpRequest from '../'

export function postUserList(query: any) {
  return httpRequest.post('/users/list', {
    data: query
  })
}

export function deleteUserById(id: number) {
  return httpRequest.delete(`/user/${id}`)
}
