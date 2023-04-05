import Swal from 'sweetalert2'
import { PiniaCustomProperties } from 'pinia'
declare module 'pinia' {
  interface PiniaCustomProperties {
    $swal: typeof Swal
    $swalToast: typeof Swal
  }
}