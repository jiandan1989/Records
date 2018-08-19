<template>
  <el-button>
    {{ msg }}
  </el-button>
</template>
<script>
export default {
  name: 'OtherComponent',
  data() {
    return {
      msg: 'demo'
    };
  }
};
</script>

<style lang="stylus">
.demo {
  font-size: 100px;
  color: red;
}
</style>
