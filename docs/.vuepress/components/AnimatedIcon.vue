<template>
  <el-row class="icon-list">
    <el-col
      v-for="key in 12"
      :key="key"
      class="icon-item"
      :span="6">
      <div class="icon-wrapper">
        <div :class="getKls(key)">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AnimatedIcon',
  data() {
    return {
      showResult: false
    };
  },
  methods: {
    getKls(key) {
      return `icon-group icon-group-${key}`;
    }
  }
};
</script>

<style lang="scss">
@import './AnimatedIcon.scss';
</style>
