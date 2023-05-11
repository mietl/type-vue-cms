import httpRequest from '..'
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
