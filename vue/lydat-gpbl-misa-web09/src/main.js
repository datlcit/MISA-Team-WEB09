import { createApp } from 'vue'
import App from './App.vue'

//import router da khai bao
import router from './router/index.js'

// Chen use(router) vao giua truoc khi chay App
createApp(App).use(router).mount('#app')
