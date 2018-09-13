### 从 0 搭建 Vue 项目

- 新建文件夹 mkdir project

- `cd project npm init` : 一路 `enter`

- 新建 index.html, 引入 `<script src="./dist/bundle.js"></script>`

---

`package.json`

- babel-plugin-transform-vue-jsx: 用于混合使用 jsx, 依赖于 babel-helper-vue-jsx-merge-props

- cross-env: 跨平台设置启动命令

- css-loader, less-loader, style-loader, postcss-loader: 处理 css

- url-loader: 处理图片

- less: css 预处理器

- autoprefixer: 自动添加前缀 主要用于 兼容 css3 等

- babel-core, babel-loader: 处理 jsx

- babel-preset-env:

- html-webpack-plugin: 自动生成 html

`文件`

- .babelrc: 处理 babel 配置信息

- gitignore: 提交过滤配置

- postcss.config.js: postcss 配置信息

- webpack.config.js: 打包配置信息


<i-back-top></i-back-top>
