import httpRequest from '../'

export function postPageList(pageName: string, query: any) {
  return httpRequest.post(`/${pageName}/list`, {
    data: query
  })
}

export function deletePageItem(pageName: string, id: number) {
  return httpRequest.delete(`/${pageName}/${id}`)
}

export function createPageItem(pageName: string, itemData: any) {
  return httpRequest.post(`/${pageName}`, {
    data: itemData
  })
}

export function updatePageItem(pageName: string, id: number, updateItem: any) {
  return httpRequest.patch(`/${pageName}/${id}`, {
    data: updateItem
  })
}

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

export function getEntireMenus() {
  return httpRequest.post(`/menu/list`)
}
