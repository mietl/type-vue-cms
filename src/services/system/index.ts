import httpRequest from '../'

export function postUserList(query: any) {
  return httpRequest.post('/users/list', {
    data: query
  })
}

export function deleteUserById(id: number) {
  return httpRequest.delete(`/user/${id}`)
}

export function getEntireRoles() {
  return httpRequest.post(`/role/list`)
}

export function getEntireDepartments() {
  return httpRequest.post(`/department/list`)
}
