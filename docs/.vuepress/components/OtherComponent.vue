<template>
  <el-button>
    {{ list }}
  </el-button>
</template>
<script>
export default {
  name: 'OtherComponent',
  props: [
    'list',
  ],
  data() {
    return {
      msg: 'demo'
    };
  }
};
</script>

<style lang="scss">
.demo {
  font-size: 100px;
  color: red;
}
</style>
