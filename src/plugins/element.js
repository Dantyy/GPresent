import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Card
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message // message需要全局挂载
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
