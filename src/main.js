import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Print from 'vue-print-nb'

Vue.use(Antd);
Vue.use(Print)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')