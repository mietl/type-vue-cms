import httpRequest from '..'

// 获取统计数据
export function getAmountList() {
  return httpRequest.get(`/goods/amount/list`)
}

// 每个分类商品的个数
export function getGoodsCategoryCount() {
  return httpRequest.get('/goods/category/count')
}

// 每个分类商品的销量
export function getGoodsCategorySale() {
  return httpRequest.get('/goods/category/sale')
}

// 每个分类商品的收藏
export function getGoodsCategoryFavor() {
  return httpRequest.get('/goods/category/favor')
}

// 销量前10的商品数量
export function getGoodsSaleTop10() {
  return httpRequest.get('/goods/sale/top10')
}

// 不同城市的销量数据
export function getGoodsAreaSale() {
  return httpRequest.get('/goods/address/sale')
}
