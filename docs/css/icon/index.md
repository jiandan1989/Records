<template>
<i-button type="primary" @click="showDrawer">查看源码</i-button>
</template>
<animated-icon></animated-icon>

<i-drawer
  title="源码查看"
  width="80%"
  v-model="showSource">
<<< @/docs/.vuepress/components/AnimatedIcon.scss
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
      showSource: false
    }
  }
}
</script>
