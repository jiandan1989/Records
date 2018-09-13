<template>
  <el-card class="css-wrapper">
      <i-collapse accordion>
        <i-panel :name="key" :key="key" v-for="(value, key) in library">
          {{ value.title }}
          <div slot="content">
            <el-row :gutter="20" :key="item.text" v-for="item in value.list">
              <el-col :span="5">
                <a :href="item.link" target="_blank">{{ item.text }}:</a>
              </el-col>
              <el-col :span="18">
                {{ item.desc }}
              </el-col>
            </el-row>
          </div>
        </i-panel>
    </i-collapse>
  </el-card>
</template>

<script>
import CSS from '../contants/css';

export default {
  name: 'CssCom',
  data() {
    return {
      library: CSS
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 0;
  .css-wrapper {
    padding-top: 2rem;
    margin-top: 2rem;
  }
  .el-card__body {
    padding: 0 !important;
  }
}
</style>

