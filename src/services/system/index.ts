import httpRequest from '../'

// 根据条件查询数据
export function postPageList(pageName: string, query: any) {
  return httpRequest.post(`/${pageName}/list`, {
    data: query
  })
}

// 根据id删除数据
export function deletePageItem(pageName: string, id: number) {
  return httpRequest.delete(`/${pageName}/${id}`)
}

// 创建页面数据
export function createPageItem(pageName: string, itemData: any) {
  return httpRequest.post(`/${pageName}`, {
    data: itemData
  })
}

// 更新页面数据
export function updatePageItem(pageName: string, id: number, updateItem: any) {
  return httpRequest.patch(`/${pageName}/${id}`, {
    data: updateItem
  })
}

