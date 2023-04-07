import { createPinia } from 'pinia';

import { swalPlugin } from '../setup/alert';

const pinia = createPinia()

pinia.use(swalPlugin);


export default pinia;