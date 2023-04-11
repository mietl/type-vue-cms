import httpRequest from '../'

export function postUserList(pageInfo: any) {
  return httpRequest.post('/users/list', {
    data: pageInfo
  })
}
