import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antdv from 'ant-design-vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router)
app.use(antdv)

app.mount('#app')
