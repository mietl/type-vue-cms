import httpRequest from '..'
export function postArticle(title: string, content: string) {
  httpRequest.post('/story', {
    data: {
      title,
      content
    }
  })
}
