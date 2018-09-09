<template>
  <div>
    <i-button @click="handleClick('result')">预览效果</i-button>
    <i-drawer
      title="效果预览"
      width="80%"
      v-model="showResult">
      <el-row class="icon-list">
        <el-col v-for="key in 12" :key="key" class="icon-item" :span="6">
          <div class="icon-wrapper">
            <div :class="getKls(key)">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </i-drawer>
  </div>
</template>

<script>
import firstUpperCase from './uitls';
export default {
  name: 'AnimatedIcon',
  data() {
    return {
      showResult: false,
    };
  },
  methods: {
    handleClick(type) {
      this[`show${firstUpperCase(type)}`] = true;
    },
    getKls(key) {
      return `icon-group icon-group-${key}`;
    }
  }
};
</script>

<style lang="scss">
@import './AnimatedIcon.scss';
</style>
