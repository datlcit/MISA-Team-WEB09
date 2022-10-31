import { createApp } from 'vue'
import VueAxios from 'vue-axios';
import App from './App.vue'
import axios from 'axios'

//import router da khai bao
import router from './router/index.js'

// Chen use(router) vao giua truoc khi chay App
const app = createApp(App).use(router);
app.use(VueAxios, {$axiosRequest: axios})
app.mount('#app');

