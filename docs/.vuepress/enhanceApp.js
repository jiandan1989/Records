import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

// import Element from 'element-ui';
// import iView from 'iview';

// element ui
import {
  Row as ElRow,
  Col as ElCol,
  Collapse as ElCollapse,
  CollapseItem as ElCollapseItem,
  Tag as ElTag,
  Tabs as ElTabs,
  TabPane as ElTabPane
} from 'element-ui';

// iview ui
import {
  Input as ivInput,
  Drawer as ivDrawer,
  Button as ivButton,
  BackTop as ivBackTop
} from 'iview';

// Vue.use(Element, { size: 'small' });

Vue.component('i-input', ivInput);
Vue.component('i-back-top', ivBackTop);
Vue.component('i-drawer', ivDrawer);
Vue.component('i-button', ivButton);
/******************************* */
Vue.component('el-tag', ElTag);
Vue.component('el-tabs', ElTabs);
Vue.component('el-tab-pane', ElTabPane);
Vue.component('el-row', ElRow);
Vue.component('el-col', ElCol);
Vue.component('el-collapse', ElCollapse);
Vue.component('el-collapse-item', ElCollapseItem);

export default ({
  Vue, // 当前 VuePress 应用所使用的 Vue 版本
  options, // 根 Vue 实例的选项
  router, // 应用程序的路由实例
  // siteData // 网站元数据
}) => {
  // ...使用应用程序级别的增强功能
}
