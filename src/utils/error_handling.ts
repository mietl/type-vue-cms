import { $swalToast } from '@/setup/alert'
export function handleError(errorMessage: string) {
  $swalToast.fire({
    text: errorMessage,
    icon: 'error'
  })
}

export function handleException(error: any) {
  console.error(error)
}
