import httpRequest from '../'

// 根据条件查询用户
export function postUserList(query: any) {
  return httpRequest.post('/users/list', {
    data: query
  })
}

// 根据用户id删除用户
export function deleteUserById(id: number) {
  return httpRequest.delete(`/users/${id}`)
}

// 创建用户
export function createUser(userInfo: any) {
  return httpRequest.post('/users', {
    data: userInfo
  })
}

// 更新用户信息
export function updateUserById(id: number, userInfo: any) {
  return httpRequest.patch(`/users/${id}`, {
    data: userInfo
  })
}
// 获取所有角色
export function getEntireRoles() {
  return httpRequest.post(`/role/list`)
}

// 获取所有部门
export function getEntireDepartments() {
  return httpRequest.post(`/department/list`)
}
