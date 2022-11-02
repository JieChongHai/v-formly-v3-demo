import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import VFormly from 'v-formly-v3';
import 'ant-design-vue/dist/antd.css';
import './assets/main.css'

const app = createApp(App);
app.use(Antd)
app.use(VFormly, {
  ui: {
    errors: {
      required: "必填项",
    },
  },
});
app.mount('#app');