import Swal from 'sweetalert2'
declare module 'pinia' {
  interface PiniaCustomProperties {
    $swal: typeof Swal
    $swalToast: typeof Swal
  }
}