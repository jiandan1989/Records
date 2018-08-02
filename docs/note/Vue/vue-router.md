### 安装

```javascript
npm install --save vue-router

yarn add vue-router
```

### 使用介绍

- 创建实例

```javascript
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: '',
      scrollBehavior(to, from, savedPosition) {
        /**
       * 滚动信息
       * @return 希望滚动的位置
       * 1. 导航跳转时回到顶部 return { x: 0, y: 0 }
       * 2. 滚动至跳转前滚动位置 return savedPostion
       * 3. 滚动锚点 return { selector: to.hash }
       * 4. 异步滚动 
       * return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 });
          }, 100);
        })
      */
      },
      beforeEnter(to, from, next) {
        /**
         * 单独组件守卫
         */
      },
      beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
      },
      beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
      },
      beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
      },
      childrend: [],
      meta: {
        /**
         * 路由元信息, 主要用于 国际化, 权限验证, 登录验证
         */
      }
    }
  ],
  beforeEach(to, from, next) {
    /**
     * 导航守卫
     * to 到哪去, 目标路由对象
     * from 从哪来, 当前正要离开的路由对象
     * next: 必须执行,
     * next(false) 中断跳转
     * next('/'), next({ path: '/' })
     */
    next();
  },
  afterEach(to, from) {},
  onError(err) {
    // 解析路由错误处理
    console.log(err);
  }
});
```

### 组件过渡动效

- 可绑定 `router-view`

```html
<transition>
  <router-view></router-view>
</transition>

<!-- 单个路由动效, 每个组件单独设置动效 -->

<transition :name="transitionName">
  <router-view></router-view>
</transition>

<!-- 单个组件 -->

<transition name="fade">
  <template>
    <div>AAAAA</div>
  </template>
</transition>
```

### 动态加载

- 插件 `syntax-dynamic-import`
- 安装 `npm install --save-dev babel-plugin-syntax-dynamic-import`
