import { ref } from 'vue'
import type TTable from '@/components/page-table/TTable.vue'

export const useSearch = () => {
  const tableRef = ref<InstanceType<typeof TTable>>()

  const resetData = () => {
    tableRef.value?.fetchPageList()
  }
  const searchData = (query: any) => {
    tableRef.value?.fetchPageList(query)
  }

  return {
    tableRef,
    resetData,
    searchData
  }
}
