import './assets/styles/main.css'
import './assets/styles/tailwind.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import vueCookies from 'vue-cookies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPlus,
  faSearch,
  faCircle,
  faAngleLeft,
  faAngleRight,
  faLocationArrow,
  faCheckDouble,
  faArrowRight,
  faCamera,
} from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faClock, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'

library.add(
  faPlus,
  faSearch,
  faUser,
  faCircle,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faLocationArrow,
  faCheckDouble,
  faClock,
  faEyeSlash,
  faArrowRight,
  faEye,
  faCamera,
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(vueCookies, { expires: '7d', secure: 'true', sameSite: 'Lax' })

const userInfos = ref(
  $cookies.get('userInfos') || {
    username: '',
    token: '',
  },
)
console.log('userInfos>>>', userInfos.value)
const changeUserInfos = (infos) => {
  userInfos.value = infos
}

// creation du provider

app.provide('GlobalStore', {
  userInfos: userInfos,
  changeUserInfos: changeUserInfos,
})
app.mount('#app')
