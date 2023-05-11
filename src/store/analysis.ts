import { defineStore } from 'pinia'

import {
  getAmountList,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale,
  getGoodsSaleTop10,
  getGoodsAreaSale
} from '@/service/analysis'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsSaleTop10: any[]
  goodsAreaSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state(): IAnalysisState {
    return {
      amountList: [],
      goodsCategoryCount: [],
      goodsCategorySale: [],
      goodsCategoryFavor: [],
      goodsSaleTop10: [],
      goodsAreaSale: []
    }
  },
  actions: {
    getAnalysisDataAction() {
      getAmountList().then((res) => {
        this.amountList = res.data
      })

      getGoodsCategoryCount().then((res) => (this.goodsCategoryCount = res.data))

      getGoodsCategorySale().then((res) => (this.goodsCategorySale = res.data))

      getGoodsCategoryFavor().then((res) => (this.goodsCategoryFavor = res.data))

      getGoodsSaleTop10().then((res) => (this.goodsSaleTop10 = res.data))

      getGoodsAreaSale().then((res) => (this.goodsAreaSale = res.data))
    }
  }
})

export default useAnalysisStore
