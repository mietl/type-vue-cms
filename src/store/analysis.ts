import { defineStore } from 'pinia'

import { getAmountList, getGoodsCategoryCount } from '@/service/analysis'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state(): IAnalysisState {
    return {
      amountList: [],
      goodsCategoryCount: []
    }
  },
  actions: {
    getAnalysisDataAction() {
      getAmountList().then((res) => {
        this.amountList = res.data
      })

      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data
      })
    }
  },
  getters: {
    pieGoodsCategoryCount(state) {
      return state.goodsCategoryCount.map((goods: any) => {
        return { name: goods.name, value: goods.goodsCount }
      })
    }
  }
})

export default useAnalysisStore
