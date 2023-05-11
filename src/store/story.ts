import { defineStore } from 'pinia'
import { postArticle } from '@/service/story'
import { handleSuccess } from '@/utils/message'

const useStoryStore = defineStore('story', {
  actions: {
    async postArticleAction(title: string, content: string) {
      await postArticle(title, content)
      handleSuccess('发布成功')
    }
  }
})

export default useStoryStore
