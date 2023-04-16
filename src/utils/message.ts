import { $swalToast } from '@/setup/alert'
export function handleError(errorMessage: string) {
  $swalToast
    .fire({
      text: errorMessage,
      icon: 'error'
    })
    .then(() => {
      // 在实例中使用close()方法关闭弹窗
      $swalToast.close()
    })
}

export function handleSuccess(message: string) {
  $swalToast
    .fire({
      text: message,
      icon: 'success'
    })
    .then(() => {
      // 在实例中使用close()方法关闭弹窗
      $swalToast.close()
    })
}

export function handleWarning(message: string) {
  $swalToast.fire({
    text: message,
    icon: 'warning'
  })
}

export function handleException(error: any) {
  console.error(error)
}
