import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false

// 导入less webpack会让main.js这个入口文件和.less建立以来关系
// import '@/styles/base.less'

//导入element.js
import '@/plugins/element.js'

new Vue({
    render: h => h(App),
    router
}).$mount('#app')