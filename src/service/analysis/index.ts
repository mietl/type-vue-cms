import httpRequest from '..'

// 获取统计数据
export function getAmountList() {
  return httpRequest.get(`/goods/amount/list`)
}

export function getGoodsCategoryCount() {
  return httpRequest.get('/goods/category/count')
}

export function getGoodsCategorySale() {
  return httpRequest.get('/goods/cetegory/sale')
}

export function getGoodsCategoryFavor() {
  return httpRequest.get('/goods/cetegory/favor')
}

export function getGoodsAddressSale() {
  return httpRequest.get('/goods/address/sale')
}
