import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

import type { App } from 'vue'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const swalPlugin = () => ({
  $swal:Swal,
  $swalToast:Toast
});


export default function (app:App){
  app.config.globalProperties.$swal = Swal;
  app.config.globalProperties.$toast = Toast;
}
