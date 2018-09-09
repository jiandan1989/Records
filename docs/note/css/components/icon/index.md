<animated-icon></animated-icon>
<template>
<i-button @click="showDrawer">查看源码</i-button>
</template>

<i-drawer
  title="源码查看"
  width="80%"
  v-model="showSource">
<el-collapse v-model="activeKey">
  <el-collapse-item title="查看scss" name="source">
  <<< @/docs/.vuepress/components/AnimatedIcon.scss
  </el-collapse-item>
</el-collapse>
</i-drawer>

<script>
export default {
  name: 'test',
  methods: {
    showDrawer() {
      this.showSource = true;
    }
  },
  data() {
    return {
      activeKey: 'source',
      showSource: false
    }
  }
}
</script>
