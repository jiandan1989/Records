import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

import './common.scss';
// import VueFullPage from 'vue-fullpage';

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
  TabPane as ElTabPane,
  Card as ElCard,
} from 'element-ui';

// iview ui
import {
  Tabs as ivTabs,
  TabPane as ivTabPane,
  Input as ivInput,
  Drawer as ivDrawer,
  Button as ivButton,
  BackTop as ivBackTop,
  Timeline as ivTimeline,
  TimelineItem as ivTimelineItem,
  Layout as ivLayout,
  Header as ivHeader,
  Content as ivContent,
  Footer as ivFooter,
  Collapse as ivCollapse,
  Panel as ivPanel,
  Card as ivCard,
  Divider as ivDivider,
  // Table as ivTable,
} from 'iview';
// Vue.use(Element, { size: 'small' });

Vue.component('i-tabs', ivTabs);
Vue.component('i-tab-pane', ivTabPane);
Vue.component('i-divider', ivDivider);
Vue.component('i-card', ivCard);
Vue.component('i-layout', ivLayout);
Vue.component('i-header', ivHeader);
Vue.component('i-content', ivContent);
Vue.component('i-footer', ivFooter);
Vue.component('i-input', ivInput);
Vue.component('i-back-top', ivBackTop);
Vue.component('i-drawer', ivDrawer);
Vue.component('i-button', ivButton);
Vue.component('i-timeline', ivTimeline);
Vue.component('i-timeline-item', ivTimelineItem);
Vue.component('i-collapse', ivCollapse);
Vue.component('i-panel', ivPanel);
/******************************* */
Vue.component('el-card', ElCard);
Vue.component('el-tag', ElTag);
Vue.component('el-tabs', ElTabs);
Vue.component('el-tab-pane', ElTabPane);
Vue.component('el-row', ElRow);
Vue.component('el-col', ElCol);
Vue.component('el-collapse', ElCollapse);
Vue.component('el-collapse-item', ElCollapseItem);
// Vue.use(VueFullPage);

export default ({
  Vue, // 当前 VuePress 应用所使用的 Vue 版本
  options, // 根 Vue 实例的选项
  router, // 应用程序的路由实例
  // siteData // 网站元数据
}) => {
  // ...使用应用程序级别的增强功能
}
